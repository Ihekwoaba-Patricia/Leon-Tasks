let osuji = document.getElementById("OsujiImg");
let adebayo = document.getElementById("AdebayoImg");
let alhaji = document.getElementById("AlhajiImg");

document.querySelector("#DrOsuji").addEventListener('click', osujiRun);
document.querySelector("#DrAdebayo").addEventListener('click', adebayoRun);
document.querySelector("#DrAlhaji").addEventListener('click', alhajiRun);

 function osujiRun(){
    adebayo.classList.add("hidden");
    alhaji.classList.add("hidden"); 
   osuji.classList.toggle("hidden");
}

function adebayoRun(){
    osuji.classList.add("hidden");
    alhaji.classList.add("hidden");
    ade = adebayo.classList.toggle("hidden"); 
}

function alhajiRun(){
    adebayo.classList.add("hidden");
    osuji.classList.add("hidden");
   alha = alhaji.classList.toggle("hidden");  
}

/* Pseduo code for temperature converter */

/* //get the data from html// */
let input1 = document.querySelector("#temp").value;
document.querySelector("#temp1").addEventListener("click", temperatureConvert)

/* //Do the convertion here// */
function temperatureConvert(){
let input2 = input1 * 9/5 + 32

/* Display the result */
alert(input2) 
/*  document.querySelector("#result1").innerText = input2  */
}



