const bodyBcg=document.querySelector('body');
const butt = document.querySelector('.butt');
const output=document.querySelector('.output1');
const input1 = document.querySelector('.input1');
const remove = document.querySelector('.remove');
let container = document.querySelector(".container"); 

butt.addEventListener('click', dodajTekst);
//remove.addEventListener('click', usunTekst);
//edit.addEventListener('click', editTekst);

notatki = [];
buttons = [];

function dodajTekst() {
new_output ="abc";
let new_input = input1.value;
notatki.push(new_input);
output.innerHTML = notatki;
document.getElementById(notatki.length-1).style.display="block";
document.getElementById(notatki.length-1+10).style.display="block"; 
}

for(let i=0; i<10; i++){
document.getElementById(i).addEventListener('click', function (){
	notatki.splice(i,1);
output.innerHTML = notatki;
document.getElementById(i).style.display="none";
document.getElementById(i+10).style.display="none";
}
	);
}

for(let i=10; i<20; i++){
document.getElementById(i).addEventListener('click', function (){
input1.value=notatki[i-10];
output.innerHTML = notatki;
}
	);
}

function editTekst(){
	input1.value=notatki[notatki.length-1+10];
}

function usunTekst(){
	//splice usuwa  element na indexie #1 jeden raz
	notatki.splice(1,1);
output.innerHTML = notatki;
}
/*
for(let i=0; i<notatki.length; i++){
	remove.addEventListener('click', usunTekst);
edit.addEventListener('click', editTekst);
}

*/