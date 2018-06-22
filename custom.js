
//Chain
 let chain =  document.getElementById('chain');

 function changeChain(){
 chain.innerHTML = "&#xf0c1";
 setTimeout(()=>  chain.innerHTML = "&#xf127",1000);
 }

 changeChain();
 setInterval(changeChain, 2000);

// Battery
 let battery = document.getElementById('battery');
 
 function batteryCharge(){
     battery.innerHTML = "&#xf244;"; 
     setTimeout(()=>battery.innerHTML = "&#xf243;", 1000);
     setTimeout(()=>battery.innerHTML = "&#xf242;", 2000);
     setTimeout(()=>battery.innerHTML = "&#xf241;", 3000);
     setTimeout(()=>battery.innerHTML = "&#xf240;", 4000);

 }

 batteryCharge();
 setInterval(batteryCharge, 5000);

//Hourglass

let hourglass = document.getElementById('hourglass');

function hourTilt(){
    hourglass.innerHTML = "&#xf251;";
    setTimeout(()=> hourglass.innerHTML = "&#xf252;", 1000);
    setTimeout(()=> hourglass.innerHTML = "&#xf253;", 2000);
}

hourTilt();
setInterval(hourTilt,3000);
