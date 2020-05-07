
const bodyBcg=document.querySelector('body');
const butt = document.querySelector('.butt');
const output=document.querySelector('.output1');
const input1 = document.querySelector('.input1');
butt.addEventListener('click', dodajTekst);



function dodajTekst() {
new_output ="abc";
let new_input = input1.value;
output.innerHTML = new_input;

}


