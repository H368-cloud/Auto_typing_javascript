const span = document.querySelector('span')

const wordList = ['Devloper', 'Coder', 'Youtuber', 'Teacher'];

let wordIndex = 0;

let charIndex = 0;

let reverseType = false;

const intervalId = setInterval(() => {
    if(!reverseType){
        span.innerText = span.innerText + wordList[wordIndex][charIndex];
        charIndex++;
    }
    else{
        span.innerText = span.innerText.slice(0,span.innerText.length-1)
    }
    if(charIndex ===  wordList[wordIndex].length){
        reverseType = true
    }
    if(span.innerText.length === 0 && reverseType){
        reverseType = false;
        charIndex = 0;
        wordIndex++
    }
    if(wordIndex === wordList.length){
        wordIndex = 0;
    }
   
}, 100);