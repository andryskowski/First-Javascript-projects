const quotes =[
{
name:'Jan Kowalski',
quote:'precz z technologia 5g'
},
{
name:'Dawid Nowak',
quote:'kosmici zaatakuja Ziemie'
},
{
name:'Sandra Kwadrat',
quote:'Lubie ziemniaki'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML=quotes[number].quote;	
}
