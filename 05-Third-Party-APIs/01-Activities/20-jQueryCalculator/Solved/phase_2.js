
// Phase II Objectives

// For the next 30 minutes, your goals should be to:

// Begin creating sets of variables that you think you will need. As a few suggestions:

// firstNumber, secondNumber, operator, result
// Create code that captures the numbers from button clicks, and then displays them on the HTML.

// Create code that captures an operator click, then immediately tells your code to begin recording the second number. (Example: If a user clicks the "plus" button, you know they are done typing the first number).

// Create code that checks which operator the user has clicked, then saves this operator for later use in a conditional statement. (Example: If a user clicks the "plus" button, you know you will need to be adding two numbers. If a user clicks the "minus" button, you will need to be subtracting two numbers. Think: if-else statements!)

$(document).ready(function () {

    // Make our variables global to the runtime of our application
    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;


    // Use a function to initialize our calculator.
    // This way when the user hits clear, we can guarantee a reset of the app.
    function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
    }
    // Create a few test "on-click" events. These could just trigger Alert messages for now. If you get further along, then have these buttons alert their "value".
    $(".number").on("click", function () { });


    // Call initializeCalculater so we can set the state of our app
    initializeCalculator();
});