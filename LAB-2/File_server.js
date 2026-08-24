import fs from "node:fs/promises";
const filepath="userData.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filepath,content,"utf8");
        console.log("File created successful!");
    } catch (err) {
         console.error("Error creating file:",err);
    }
}

async function readFile() {
    try {
        const data=await fs.readFile(filepath,"utf8");
        console.log("File content: ",data);
        return data;
    } catch (err) {
         console.error("Error occured");
    }
}





await createFile("Welcome to backend programming");
await readFile();