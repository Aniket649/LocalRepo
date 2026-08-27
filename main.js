// const fs = require("fs")

// console.log(fs)

// console.log("starting")
// // fs.writeFileSync("Anike.txt", "Aniket is more advance boy")
// console.log("ending")

// fs.writeFile("Aniket2.txt", "Aniket is good boy our team" ,()=>{
//     console.log("done")
//     fs.readFile("Aniket2.txt", (error,data)=>{
//          console.log(error,data.toString())
//     })
// })
// //append file
// fs.appendFile("Aniket.txt","Ahiket in smarts person in  world",(e, d) =>{
//     console.log(d)
// })

// console.log("ending")


const fs = require("fs")

console.log(fs)

console.log("starting")
fs.writeFileSync("Kharad.txt","Kharad is best in world")
console.log("ending")

fs.appendFile("Aniket.txt","you are in more confidence",(e,d)=>{
    console.log(d)
})
