// CRUD Operations

// GET     -> localhost:3000/msg
// POST    -> localhost:3000/create
// GET     -> localhost:3000/read
// PUT     -> localhost:3000/update
  

//FOR UPDATE

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

    // CREATE - POST /create
    else if (url === "/create" && method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const newdata = JSON.parse(body);

            const newUser = {
                id: newdata.id,
                name: newdata.name,
                email: newdata.email
            };

            userdata.push(newUser);

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                message: "User created successfully",
                data: newUser
            }));
        });
    }

    // READ - GET /read
    else if (url === "/read" && method === "GET") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(userdata));
    }

    // UPDATE - PUT /update
    else if (url === "/update" && method === "PUT") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const updatedata = JSON.parse(body);

            const user = userdata.find(
                (u) => u.id === updatedata.id
            );

            if (!user) {
                res.statusCode = 404;
                return res.end("User not found");
            }

            user.name = updatedata.name;
            user.email = updatedata.email;

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                message: "User updated successfully",
                data: user
            }));
        });
    }

    // DELETE - DELETE /delete
    else if (url === "/delete" && method === "DELETE") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const deletedata = JSON.parse(body);

            const index = userdata.findIndex(
                (u) => u.id === deletedata.id
            );

            if (index === -1) {
                res.statusCode = 404;
                return res.end("User not found");
            }

            const deletedUser = userdata.splice(index, 1);

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                message: "User deleted successfully",
                data: deletedUser[0]
            }));
        });
    }

    // Wrong Route
    else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port: 3000");
});