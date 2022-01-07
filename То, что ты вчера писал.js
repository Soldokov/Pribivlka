let image   = document.getElementById("image");
let pigeon1 = document.getElementById("p1");
let pigeon2 = document.getElementById("p2");
let pigeon3 = document.getElementById("p3");

    addEventListener('click', function(event)
    {
        image.style.visibility ="visible";
        image.style.left = event.pageX +'px';
        image.style.top  = event.pageY +'px';
        setTimeout(() => 
            {image.style.visibility="hidden";},2000)
    });

window.addEventListener('mousemove',function(ev)
{
	p1.style.left = ev.clientX + (Math.random() *(50 - (-50) + 50)) + "px";
	p1.style.top  = ev.clientY + (Math.random() *(50 - (-50) + 50)) + "px";

    p2.style.left = ev.clientX + (Math.random() *(50 - (-50) + 50)) + "px";
	p2.style.top  = ev.clientY + (Math.random() *(50 - (-50) + 50)) + "px";
    
    p3.style.left = ev.clientX + (Math.random() *(50 - (-50) + 50)) + "px";
	p3.style.top  = ev.clientY + (Math.random() *(50 - (-50) + 50)) + "px";

},false);
