
const body = document.querySelector('body')
const nxtBtn = document.querySelector('.nxtBtn')
const images =document.querySelector('.images');
const prvBtn = document.querySelector('.prvBtn')


let counter=1;
nxtBtn.addEventListener('click', NextSlide);
prvBtn.addEventListener('click', PrevSlide);


function PrevSlide() {
if(counter===1)
{
	counter=4;
}
counter--;
images.style.backgroundImage='url(img/0'+counter+'.png)';
}

function NextSlide() {
		if(counter===3)
{
counter =0;
}
counter++;

images.style.backgroundImage='url(img/0'+counter+'.png)';

}