import fs from "node:fs/promises";
const filepath="userData.json";

async function createFile(content) {
    try {
        await fs.writeFile(filepath, content, "utf8");
        console.log("File created successful!");
    } catch (err) {
        console.error("Error creating file:", err);
    }
}

createFile(`{
    "name": "Ayush",
    "age": 20,
    "course": "B.Tech CSE"
}`);