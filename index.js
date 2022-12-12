const imgBulp = document.querySelector('#bulp-off');
const button = document.querySelector(".btn");
// console.log(button)

/*step2 :- creating a function for diplay the img*/
function bulpOnOff() {
    // console.log("ritu")
    if (button.textContent.includes("ON")) {
         imgBulp.src = "bulp on.jpg";
         button.textContent = "TURN OFF";
    } else {
         imgBulp.src = "bulp off.jpg";
         button.textContent = "TURN ON";
    }
 }

/* step1 :- add event listener on btn*/
button.addEventListener('click', bulpOnOff);