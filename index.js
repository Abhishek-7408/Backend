console.log('Hello World!');


function add(a,b){
    return a+b;
}
console.log(add(5,8));

console.log(process.argv);//global 

var args = process.argv.slice(2);
console.log("adding the numbers: ",add(parseInt(args[0]),parseInt(args[1])));