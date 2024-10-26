   /* ***************************
        BACKGROUND PICKER
    *************************** */
   
        document.getElementById("blue").onclick=partyBlue;
        document.getElementById("red").onclick=partyRed;
        document.getElementById("brown").onclick=partyBrown;
        document.getElementById("purple").onclick=partyPurple;
        document.getElementById("yellow").onclick=partyYellow;
        document.getElementById("white").onclick=partyWhite;
        
        function partyBlue(){
            document.querySelector("body").style.backgroundColor="blue";
            document.querySelector("body").style.color="white";
            
        }

        function partyRed(){
            document.querySelector("body").style.backgroundColor="red";
            document.querySelector("body").style.color="white";
        }

        function partyBrown(){
            document.querySelector("body").style.backgroundColor="brown";
            document.querySelector("body").style.color="white";
        }

        function partyPurple(){
            document.querySelector("body").style.backgroundColor="purple";
            document.querySelector("body").style.color="white";
        }

        function partyYellow(){
            document.querySelector("body").style.backgroundColor="yellow";
            document.querySelector("body").style.color="black";
        }
        function partyWhite(){
            document.querySelector("body").style.backgroundColor="white";
            document.querySelector("body").style.color="black";
        }


                    /* ***************************
                        NOT SO GOOD CALCULATOR
                    *************************** */
    let total = 0;

    document.querySelector("#zero").addEventListener('click', calZero);
    document.querySelector("#plusThree").addEventListener('click', calThree);
    document.querySelector("#timesNine").addEventListener('click', calNine);
    document.querySelector("#minusFive").addEventListener('click', calFive);
    document.querySelector("#divideTwo").addEventListener("click", calTwo);

    function calZero(){
        total=0
        document.querySelector("#result").innerText=total;
    }

    function calThree(){
        total= total + 3
        document.querySelector("#result").innerText=total;
    }

    function calNine(){
        total = total * 9
        document.querySelector("#result").innerText=total;
    }

    function calFive(){
        total = total - 5
        document.querySelector("#result").innerText=total;
    }

    function calTwo(){
        total = total / 2
        document.querySelector("#result").innerText=total;
    }


        /* *****************************************
            DAILY EVENTS (Conditional Statement)        
            *****************************************/
    document.querySelector("#checkEvents").addEventListener("click", check);

    function check(){
        let day = document.querySelector("#days").value;
    
        if(day === "Monday"  || day ==="MONDAY" || day === "monday"  ){
            alert("Our teaching holds on Monday by 8a.m");
        }
        else if(day === "Tuesday" || day ==="TUESDAY" || day === "tuesday"){
            alert(" Personl Read-up exercise is always on Tuesdays")
        }
        else if (day === "Wednesday" || day === "WEDNESDAY" || day ==="wednesday"){
            alert("Wednesdays are for practicals")
        }
        else if(day === "Thursday" || day === "THURSDAY" || day === "thursday"){
            alert("You are always free to do your assignment on Thursdays")
        }
        else if(day === "Friday" || day === "FRIDAY" || day === "friday"){
            alert("ALL assignment are to be submitted on Fridays")
        }
        else if (day === "Saturday" || day === "SATURDAY" || day === "saturday"){
            alert("Its weekend, Have some cofee chats")
        }
        else if(day === "Sunday" || day === "SUNDAY" || days ==="sunday"){
            alert("Go to Church and Rest")
        }
            else{
            alert("Please, check your spellings and make sure you put the correct days of week. Thanks")
        }
    }



     /* **************************************************
    ASSIGNMENT ON CLASS 11:
************************************************** */
// *VARIABLES*\\
// Create a variable and console log the value
let chika = "it's 1 bag of cement"
console.log(chika);

//Create a variable, add 10 to it, and alert the value
 let demo = 10;
 demo += 30
/* alert(demo)  */

// *FUNCTION*\\
// Create a function that subtrct 4 numbers and alert the difference
function CHIKA(a,b,c,d){
/* alert(a-b-c-d) */
}
CHIKA(10,4,8,2)

//Create a function that devides the number by another and returns the remainder
function DEMO(x,y){
    return x % y;
}
DEMO(12,3)

// *CONDITIONS*\\
//Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
document.querySelector("#addition").addEventListener('click', addTogether);

function addTogether(){
    let numOne = document.getElementById("num1").value 
    let numTwo = document.getElementById("num2").value;
    let resultone = parseFloat(numOne) + parseFloat(numTwo) /* Number(numOne) + Number(numTwo) OR parseInt(numOne) + parseInt(numTwo)*/
    alert(resultone)
  /*   document.getElementById("displayResult").innerText=resultone; */

   if(resultone>50){
        alert("Jumanji");
        }
        else{
            alert("good to go")
        }
   }
   

//Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
document.querySelector("#multiply").addEventListener('click', multiplyRun);
function multiplyRun(){
    let numThree = document.getElementById("num3").value;
    let numFour = document.getElementById("num4").value;
    let numFive = document.getElementById("num5").value
    let resultAll = Number(numThree) * Number(numFour) * Number(numFive);
    alert(resultAll);

    if(resultAll % 3 === 0){
        alert("ZEBRA")
    }
}

//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in.
    function logWordXTimes(word, num){
        for(let i =1; i<=num; i++){
            console.log(word);

        }
    }
    logWordXTimes("dominos", 21)

           /*  ***ROSE IDENTIFIER*** */
let allContestant = document.querySelectorAll(".contestants")
Array.from(allContestant).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
    if(click.target.classList.contains("rose")){
        document.querySelector("#mercyImg").classList.toggle("hidden")
    }
    else{
        alert("WRONG")
    }

}

  /*  ***ANGRY PARENT STIMULATOR*** */
    const synth = window.speechSynthesis
  document.getElementById("showWord").addEventListener('click', wordRun);
  function wordRun(){
    let first1 = document.getElementById("firstWord").value;
    let first2 = document.getElementById("secondWord").value;
    let first3 = document.getElementById("thirdWord").value;
    let first4 = document.getElementById("forthWord").value;

    const allText = `${first1} ${first2} ${first3} ${first4}`;

    document.querySelector("#displayWords").innerText = allText;

    let finaltext = new SpeechSynthesisUtterance(allText);

    synth.speak(finaltext);

   /*  document.querySelector("#displayWords").innerText = `${first1} ${first2} ${first3} ${first4}` */
  /* alert(`${first1}, ${first2}, ${first3}, ${first4}`) */
  }


  /*   function check(){
        let day = document.querySelector("#days").value.toLowerCase();
    
        if(day === "Monday"){
            alert("Our teaching holds on Monday by 8a.m");
        }
        else if(day === "Tuesday" ){
            alert(" Personl Read-up exercise is always on Tuesdays")
        }
        else if (day === "Wednesday"){
            alert("Wednesdays are for practicals")
        }
        else if(day === "Thursday"){
            alert("You are always free to do your assignment on Thursdays")
        }
        else if(day === "Friday" ){
            alert("ALL assignment are to be submitted on Fridays")
        }
        else if (day === "Saturday" ){
            alert("Its weekend, Have some cofee chats")
        }
        else if(day === "Sunday"){
            alert("Go to Church and Rest")
        }
            else{
            alert("Please, check your spellings and make sure you put the correct days of week. Thanks")
        }
    } */
   
   
   
   
   
   
   
 