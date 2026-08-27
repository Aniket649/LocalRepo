import fs from "fs/promises"
let a =await fs.readFile("Aniket.txt")

let b = await fs.writeFile("Aniket.txt","this is amazing promise")

console.log(a.toString(),b)