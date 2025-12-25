// Lab 4: JavaScript Basics and DOM Manipulation

// 1. Demonstrate Variables and Data Types
function demonstrateVariables() {
    let name = "John Doe";
    let age = 25;
    let isStudent = true;
    let marks = [85, 90, 78, 92];
    let person = {
        firstName: "Jane",
        lastName: "Smith",
        grade: "A"
    };
    
    let output = `
        <strong>Variable Examples:</strong><br>
        String: ${name}<br>
        Number: ${age}<br>
        Boolean: ${isStudent}<br>
        Array: [${marks.join(', ')}]<br>
        Object: ${person.firstName} ${person.lastName}, Grade: ${person.grade}
    `;
    
    document.getElementById('variablesOutput').innerHTML = output;
}

// 2. Calculator Function
function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }
    
    document.getElementById('calcOutput').innerHTML = 
        `<strong>Result:</strong> ${num1} ${operation} ${num2} = ${result}`;
}

// 3. Demonstrate Array Operations
function demonstrateArrays() {
    let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
    
    let output = `
        <strong>Array Operations:</strong><br>
        Original Array: [${fruits.join(', ')}]<br>
        Length: ${fruits.length}<br>
        First Element: ${fruits[0]}<br>
        Last Element: ${fruits[fruits.length - 1]}<br>
        Array after push('Grapes'): [${[...fruits, 'Grapes'].join(', ')}]<br>
        Sorted Array: [${[...fruits].sort().join(', ')}]<br>
        Reversed Array: [${[...fruits].reverse().join(', ')}]
    `;
    
    document.getElementById('arrayOutput').innerHTML = output;
}

// 4. Check Age Eligibility
function checkAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    let message;
    
    if (isNaN(age)) {
        message = 'Please enter a valid age';
    } else if (age < 18) {
        message = 'You are a minor. Not eligible to vote.';
    } else if (age >= 18 && age < 65) {
        message = 'You are an adult. Eligible to vote!';
    } else {
        message = 'You are a senior citizen. Eligible to vote with special assistance.';
    }
    
    document.getElementById('ageOutput').innerHTML = `<strong>${message}</strong>`;
}

// 5. Demonstrate Loops with Multiplication Table
function demonstrateLoops() {
    let num = parseInt(document.getElementById('loopInput').value);
    
    if (isNaN(num)) {
        document.getElementById('loopOutput').innerHTML = 
            '<strong>Please enter a valid number</strong>';
        return;
    }
    
    let table = `<strong>Multiplication Table of ${num}:</strong><br>`;
    
    for (let i = 1; i <= 10; i++) {
        table += `${num} × ${i} = ${num * i}<br>`;
    }
    
    document.getElementById('loopOutput').innerHTML = table;
}

// 6. DOM Manipulation Functions
function updateDisplay() {
    let text = document.getElementById('textInput').value;
    if (text) {
        document.getElementById('displayArea').innerHTML = text;
    } else {
        alert('Please enter some text!');
    }
}

function changeColor() {
    let colors = ['red', 'blue', 'green', 'purple', 'orange', 'brown'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('displayArea').style.color = randomColor;
}

function toggleVisibility() {
    let displayArea = document.getElementById('displayArea');
    if (displayArea.style.display === 'none') {
        displayArea.style.display = 'block';
    } else {
        displayArea.style.display = 'none';
    }
}

// Initialize with a welcome message
window.onload = function() {
    console.log('JavaScript Lab 4 loaded successfully!');
};
