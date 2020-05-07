const body = document.querySelector('body')
const Output = document.querySelector('.Output')
const Equals = document.querySelector('.Equals')
const Clear = document.querySelector('.Clear')
const btn = document.querySelectorAll('.btn')


for(let i=0; i<btn.length; i++){

btn[i].addEventListener('click', function (){
let number=btn[i].getAttribute('data-num'); 
Output.value+=number;
})
}

Equals.addEventListener('click', function(){

let outputString=eval(Output.value);

	//let value2=eval(Output.value);
	//console.log(Output.value);
Output.value=outputString;
});

Clear.addEventListener('click', function(){
Output.value='0';
});







