// 1st phase
document.getElementById('myButton').addEventListener('click', function() {
    // Change the color of the button when clicked
    this.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 2nd phase

// Get the current hour
let currentHour = new Date().getHours();

// Define the greeting messages for different time periods
let greetingMessages = {
 morning: "Good morning!",
 afternoon: "Good afternoon!",
 evening: "Good evening!",
 night: "Good night!"
};

// Determine the current time period based on the current hour
let currentTimePeriod;
if (currentHour >= 0 && currentHour < 6) {
 currentTimePeriod = "night";
} else if (currentHour >= 6 && currentHour < 12) {
 currentTimePeriod = "morning";
} else if (currentHour >= 12 && currentHour < 18) {
 currentTimePeriod = "afternoon";
} else {
 currentTimePeriod = "evening";
}

// Display the appropriate greeting message based on the current time period
alert(greetingMessages[currentTimePeriod]);


// 3rd phase 
function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById('result').value = sum;
}