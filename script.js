// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");
// const specialChars = ["%", "*", "/", "-", "+", "="];
// let output = "";






// // define functions to calculate based on button clicked.
// const calculate = (datatnValue) => {
//     if(btnValue === "=" && output !== "") {
//         //if output has '%', replace with '/100' before evaluating.
//         output = eval(output.replace("%", "/100"));
//     } else if (btnValue === "AC") {
//         output = "";
//     } else if (btnValue === "DEL") {
//         // if Del button is clicked, remove the last Character from the output
//        output = output.toString().slice(0, -1);
//     }else{
//         //  if output is empty and button is specialChars then return
//         if(output === "" && specialChars.includes(btnValue)) return;
//         output += btnValue;
//     }
//     display.value = output;
// };

// // add Event listener to buttons calculate() onclick.
// buttons.forEach((button) => {
//     // button click event listener calls calculate() with the dataset value as argument
//     button.addEventListener("click", (e)=> console.log(e.target.data))
// });

