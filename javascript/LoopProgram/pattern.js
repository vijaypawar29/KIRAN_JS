//1
//12
//123
//1234
//12345
//

let range = parseInt(prompt("enter a range"))

for(let i=1; i<=range;i++){
    for(let j=1;j<=i;j++){
        document.write(j);
    }
    document.write("<br>")
}