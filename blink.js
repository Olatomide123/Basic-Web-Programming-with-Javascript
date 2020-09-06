function blink()
{
	let body = document.querySelector('body');
	if (body.style.visibility === "hidden")
		{
			body.style.visibility= "visible";
		}
	else
	{
		body.style.visibility="hidden"
	}
}
// Blink every 500 milliseconds
window.setInterval(blink,500);