/*------------------------ Cached Element References ------------------------*/
const handleButtons = document.querySelectorAll(".button");
const display = document.querySelector(".display");



/*-------------------------------- Variables --------------------------------*/

let operationBox = "";


/*-------------------------------- Functions --------------------------------*/

const clear = () => {
    operationBox = "";
  };
  
  const equals = () => {
    //displays the total after equation
    display.textContent = eval(operationBox);
    //set the operating box to that total after eval so that we can continue operating
    operationBox = eval(operationBox);
  };
  


/*----------------------------- Event Listeners -----------------------------*/

handleButtons.forEach((elementButton) => {
  elementButton.addEventListener("click", () => {
    if (elementButton.textContent === "=") {
      equals();
      return;
    }

    operationBox += elementButton.textContent;
    display.textContent = operationBox;

    if (elementButton.textContent === "C") {
      clear();
      display.textContent = operationBox;

      return;
    }

    
  });
});
