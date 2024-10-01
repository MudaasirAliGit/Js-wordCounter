// Assignment: Word Count Using Loop (Excluding Whitespace)
// Write a JavaScript program that counts the number of words 
// in a given sentence, excluding extra spaces, using a loop.

let sentence = prompt("Enter any sentence:");
sentence = sentence.split(/\s+/).join(' ').trim();

let count = 0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i] === ' '){
        count++;
    }
}
if(sentence.length === 0){
    alert("Word count = 0");
}
else{
    alert(`Word count = ${count+1}`);
}