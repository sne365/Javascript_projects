const dstxt = ['Python', 'Javascript', 'ReactNative'];
let letters='';
let counter =0;
let index = 0;
let current_word='';

// self invoking function
(function typer(){
    if (counter === dstxt.length){
    counter=0;
}
current_word = dstxt[counter];
letters = current_word.slice(0,++index);
document.querySelector('.txt-effect').textContent =letters;
if(letters.length === current_word.length){
    counter++;
    index =0;
}
setTimeout(typer, 100);
})();