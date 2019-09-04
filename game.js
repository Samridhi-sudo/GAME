var sec=20;
var diceTotal=0;
function roll(){
	var die= document.getElementById("throw");
	var d=Math.floor(Math.random() * 6) +1;
	document.getElementById('image').src = 'dice-' + d + '.png';
	document.getElementById('throw').innerHTML=d;
		
	 diceTotal= diceTotal+d;
	die.innerHTML=d;
	document.getElementById('total score').innerHTML=diceTotal;



	if(sec<=0)
	{
		Button.disabled=true;
		alert("game over");
	}

	if(sec==20)
	{
		timer();
	}

}

function timer()
{
	if(sec<=0)
	{
		Button.disabled=true;
		alert("Game Over")
	}
	else{
		sec=sec-1;
		document.getElementById("timer").innerHTML=sec;
	}

	setTimeout(function(){timer();},1000);
}