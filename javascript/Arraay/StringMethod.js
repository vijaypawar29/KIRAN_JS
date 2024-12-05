//Strings literal
//Strings  object

let str ="Hello Welcome bye"
console.log(str[2])

//for(let i =0;)




//
//let arr= str.split(",")
// let arr= str.split(" ")
let arr = str.split("")
console.log(arr)


//Date
let cdate = new Date().toLocaleDateString();
let ctime = new Date().toLocaleTimeString();
let newDate = new Date("2023-03-25").getDate();
let cmonth = new Date().getFullYear()

document.write(cdate+ "<br>")
document.write(newDate+ "<br>")
document.write(cmonth+ "<br>")
