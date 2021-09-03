function reverse(text) {
    let newText = '';
    for(i = text.length-1; i >= 0; i--){
        newText += text.charAt(i);
    }
    return newText;
}

function replaceVowels(text){
    let newText = '';
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(i = 0; i < text.length; i++){
        if(vowels.includes(text.charAt(i))){
            newText += '*';
        }else {
            newText += text.charAt(i);
        }
    }
    return newText;
}

function countVowels(text){
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(i = 0; i < text.length; i++){
        if(vowels.includes(text.charAt(i))){
            count += 1;
        }
    }
    return count;
}

let text1 = 'GAME narak makmak';
console.log(text1);
console.log('--------------------------------------------')
console.log(`Reverse string : ${reverse(text1)}`);
console.log(`Replace vowels with '*' : ${replaceVowels(text1)}`);
console.log(`The number of vowels : ${countVowels(text1)}`);
console.log('--------------------------------------------\n')


let text2 = 'ICE rak GAME makmak naka ';
console.log(text2);
console.log('--------------------------------------------')
console.log(`Reverse string : ${reverse(text2)}`);
console.log(`Replace vowels with '*' : ${replaceVowels(text2)}`);
console.log(`The number of vowels : ${countVowels(text2)}`);
console.log('--------------------------------------------\n')