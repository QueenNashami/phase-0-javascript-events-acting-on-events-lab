// Get the dodger element from the HTML document
const dodger = document.getElementById("dodger");

// Function to move the dodger to the left
function moveDodgerLeft() {
    // Extract the current left position of the dodger and convert it to a number
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // If the left position is greater than 0 (not at the left edge of its container),
    // move the dodger 1 pixel to the left
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Listen for the 'keydown' event on the document
document.addEventListener("keydown", function (e) {
    // If the pressed key is the left arrow key
    if (e.key === "ArrowLeft") {
        // Call the moveDodgerLeft function to move the dodger to the left
        moveDodgerLeft();
    }
});

// Function to move the dodger to the right
function moveDodgerRight() {
    // Extract the current left position of the dodger and convert it to a number
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // If the left position is greater than 0 (not at the left edge of its container),
    // move the dodger 1 pixel to the right
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Listen for the 'keydown' event on the document
document.addEventListener("keydown", function (e) {
    // If the pressed key is the right arrow key
    if (e.key === "ArrowRight") {
        // Call the moveDodgerRight function to move the dodger to the right
        moveDodgerRight();
    }
});
