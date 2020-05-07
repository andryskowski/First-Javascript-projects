const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const output=document.querySelector('.score');

//	drawBackground();
//waz
let score =0;
	let snake=[];
	snake[0]={
	//jak wezmieny 25 to prawy wierzcholek bedzie w punkcie 300,300, a
	//a nam chodzi, zeby byl na srodku
	x: Math.floor((23/2))*25,
	y: Math.floor((23/2))*25
	};

	let apple={
	//22 to liczba kwadratow na zielonym tle (550/25=22)
	//musi byc jeszcze dodana jedynka, zeby uwzglednic ramke
	x: Math.floor(1 + (Math.random()* (22)))*25,
	y: Math.floor(1+ (Math.random()*(22)))*25
	};
	//klawiatura
let dir;
document.addEventListener('keydown', direction);

function direction(event)
{
	if(event.keyCode == 65)
		dir="LEFT";
	if(event.keyCode == 87)
		dir="UP";
	if(event.keyCode == 68)
		dir="RIGHT";
	if(event.keyCode == 83)
		dir="DOWN";
}

function drawing(){
		ctx.fillStyle = 'green';
	ctx.fillRect(25, 25, 550, 550);
	//rysowanie weza
		for(let i=0; i<snake.length; i++)
	{
	ctx.fillStyle = 'yellow';
	ctx.fillRect(snake[i].x,snake[i].y, 25, 25);
	}
	ctx.fillStyle = 'red';
	ctx.fillRect(apple.x,apple.y, 25, 25);
//ruch weza
	if(dir == "LEFT")
		snake[0].x-=25;
	if(dir == "RIGHT")
		snake[0].x+=25;
	if(dir=="UP")
		snake[0].y-=25;
	if(dir=="DOWN")
		snake[0].y += 25;

	let snakeX = snake[0].x;
	let snakeY = snake[0].y
	let newHead = {
		x: snakeX,
		y: snakeY
	};
	
//jedzenie jablka
	if(snake[0].x==apple.x && snake[0].y==apple.y){
	score+=1;
	apple={
	x: Math.floor(1 + (Math.random()* (22)))*25,
	y: Math.floor(1+ (Math.random()*(22)))*25

	}
	}
	else{
		snake.pop();
	}
	snake.unshift(newHead);
	

	if(snakeX < 25 || snakeY < 25 || snakeX > 550 || snakeY > 550)
{
	clearInterval(game);
}
output.innerHTML = "Score:" + score;
}

let game = setInterval(drawing, 100);
