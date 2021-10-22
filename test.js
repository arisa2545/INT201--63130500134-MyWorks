reverseString = word =>{
    let value = ''
    for (let i = word.length-1; i=0; i--) {
        value += word[i];  
        console.log(value);
    }
    return value;
}

console.log(reverseString("Hello World"));

let tt = 'Arisa';
console.log(tt.charAt(0));