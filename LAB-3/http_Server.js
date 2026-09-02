// POST sending data
// GET getting data
// PUT for update
// DELETE for delete

import http from "http";

const userdata = [
    {
        id: 9,
        name: "john",
        email: "john123@gmail.com",
    },
];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // GET /msg
    if (url === "/msg" && method === "GET") {
        res.end("This is welcome message from server");
    }

    // GET /sys
    else if (url === "/sys" && method === "GET") {
        res.end("This is system information");
    }

    // GET /data
    else if (url === "/users" && method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(userdata));
    }

    // GET /users/:id
    else if (url.startsWith("/users/") && method === "GET") {

        const id = url.split("/")[2];

        console.log(id);

        const user = userdata.find((u) => u.id == id);

        if (!user) {
            res.statusCode = 404;
            return res.end("User not found");
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(user));
    }

    // POST /create
    else if (url === "/create" && method === "POST") {
        let body = "";

        // Data receive ho raha hai
        req.on("data", (chunk) => {
            body += chunk;
        });

        // Jab complete data receive ho jaye
        req.on("end", () => {
            const newdata = JSON.parse(body);

            const newuserdata = {
                id: newdata.id,
                name: newdata.name,
                email: newdata.email
            };

            userdata.push(newuserdata);

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");

            res.end(
                JSON.stringify({
                    message: "Data uploaded successfully",
                    data: newuserdata
                })
            );
        });
    }

    // Wrong route
    else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port: 3000");
});