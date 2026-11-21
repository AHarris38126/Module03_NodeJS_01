// Object access and invocation: Call console.log to ask for the user's name.
console.log("What's your name?");

// Object access, invocation, and function expression: Listen for input from the terminal.
process.stdin.on('data', function(data) {
    // Variable declaration and method calls: Turn the input into text and remove extra whitespace.
    const name = data.toString().trim();

    // Template literal and invocation: Put the name in the greeting and print it.
    console.log(`Hello, ${name}!`);
// Close the function and finish the call to .on().
});