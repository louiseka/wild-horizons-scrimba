import fs from "fs";

fs.writeFileSync("message.txt", "Hello Node.js");
const text = fs.readFileSync("message.txt", "utf8");
console.log(text);
