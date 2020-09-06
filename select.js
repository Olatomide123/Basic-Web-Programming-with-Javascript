function chg () 
{

	let x = document.querySelector('#myselect').value

	let body = document.querySelector('p');

	if (x === "large")
		{
			body.style.fontSize = "xx-large";
		}
		else if (x === "small")
		{
			body.style.fontSize = "xx-small";
		}
			else if (x === "initial")
		{
			body.style.fontSize = "initial";
		}
}