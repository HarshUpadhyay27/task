let name = "mom"

let newName = name.split("").reverse().reduce((a,c)=>(a.concat(c)), "")
if(name === newName){
    console.log(`${name} is palindrome`)
}else{
    console.log(`${name} is not palindrome`)
}


/*-----star pattern -------*/

let str = "";
for(let i = 1; i <= 3; i++ ){
    for(let j = 1; j <= 3; j++){
        if(i + j > 3){
            str = str.concat("*");
        }else{
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}
console.log(str)