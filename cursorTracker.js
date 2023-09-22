// Get references to the button and distance display elements
const button = document.getElementById('voteButton');
const distanceDisplay = document.getElementById('distanceDisplay');

// Function to calculate the distance between two points
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// Add a mousemove event listener to the entire document
document.addEventListener('mousemove', (event) => {
    const buttonRect = button.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    // Calculate the distance
    const distance = calculateDistance(mouseX, mouseY, buttonX, buttonY);

    // Display the distance
    distanceDisplay.textContent = `Distance: ${distance.toFixed(2)} pixels`;
});