const canvas = document.querySelector("#canvas");
let color ="black"; //starting color
createCanvas(16); //This will be my starting canvas since the slider starts at 16x16


function createCanvas(size){ 
    for (let i = 0; i < size*size ; i++){ //Gonna create size x size squares
        const square = document.createElement('div'); //Creates a square
        square.classList.add('square'); //Gives it the .square class
        square.setAttribute("style", `width: calc(100%/${size}); height: calc(100%/${size})`);
        /* Basically each square will take up 100%/size of the canvas
        So say we have 10x10 squares.
        Each square will have width: 10% and height: 10%. Meaning each will be 50px x 50px since the canvas is 500px x 500px
        so we can perfectly fit 100 squares.
        
        Note that the calc() is needed to calculate inside CSS
        */
        canvas.appendChild(square); //adds it to the canvas
    }
}

squares = document.querySelectorAll(".square"); //Selects all our created squares from createCanvas()
squares.forEach(square => { //Adds an event listener to each square to change color when mouseover it
    square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = color;
    })
    
});

//Adds an event to each .toggle-btn where when they are clicked, we remove all .active on the toggle-button
//and add .active to the button that was clicked (event.target)
//This is to only have 1 active togle button at once. 
toggleBtns = document.querySelectorAll(".toggle-btn"); 
toggleBtns.forEach(btn => { 
    btn.addEventListener("click", (event)=> {
        toggleBtns.forEach(btn => {btn.classList.remove("active")});
        event.target.classList.add("active");})
});

colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("input", () => { //use input as the event so that we change color when a new color is inputted
    color = colorPicker.value;
})

colorBtn = document.querySelector("#color-btn");
colorBtn.addEventListener("click", () => {
    color = colorPicker.value;
})

eraserBtn = document.querySelector("#eraser-btn");
eraserBtn.addEventListener("click", () => {
    color = "white"; //to "erase"
})

clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", ()=>{
    squares.forEach(square => {square.style.backgroundColor = "white";}) //"erases" all the squares
})
