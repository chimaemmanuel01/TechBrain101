
// TechBrain101 Welcome Screen

function centerText(text: string, width: number = 50): string {
    const spaces = Math.max(0, Math.floor((width - text.length) / 2));
    return " ".repeat(spaces) + text;
}

// Welcome screen - centered
console.log(centerText("Welcome to TechBrain101!"));
console.log(centerText("The Technology Quiz Game"));
console.log(centerText("Think. Answer. Level up!"));
console.log("");

// Other messages - left aligned
console.log("Test your knowledge of technology.");
console.log("Get ready to begin the quiz!");

// Importing readline
import * as readline from "node:readline";

// Defining the structure of each question
interface Question {
    question: string;
    options: string[];
    answer: string;
}

// Adding the questions and answers
const questions: Question[] = [
    {
        question: "What does JavaScript primarily help developers do on a website?",
        options: ["A. Add interactivity", "B. Manufacture computers", "C. Repair hardware", "D. Create internet connections"],
        answer: "A"
    },
    {
        question: "Which JavaScript data type represents a value that is either true or false?",
        options: ["A. String", "B. Boolean", "C. Number", "D. Array"],
        answer: "B"
    },
    {
        question: "Which keyword declares a variable that can be reassigned?",
        options: ["A. const", "B. return", "C. let", "D. function"],
        answer: "C"
    },
    {
        question: "Which operator compares both value and data type in JavaScript?",
        options: ["A. =", "B. ==", "C. +", "D. ==="],
        answer: "D"
    },
    {
        question: "Which symbol is used to start a single-line comment in JavaScript?",
        options: ["A. //", "B. ##", "C. **", "D. <!--"],
        answer: "A"
    },
    {
        question: "Which of these is a JavaScript string?",
        options: ["A. 25", "B. true", "C. \"Hello World\"", "D. [1, 2, 3]"],
        answer: "C"
    },
    {
        question: "Which JavaScript structure stores multiple values in an ordered collection?",
        options: ["A. Boolean", "B. Array", "C. Operator", "D. Conditional"],
        answer: "B"
    },
    {
        question: "Which statement allows a program to make a decision based on a condition?",
        options: ["A. console.log", "B. const", "C. return", "D. if...else"],
        answer: "D"
    },
    {
        question: "Which programming structure repeats a block of code?",
        options: ["A. Loop", "B. String", "C. Variable", "D. Object"],
        answer: "A"
    },
    {
        question: "What is the main purpose of a function in JavaScript?",
        options: ["A. Store only numbers", "B. Compare two values only", "C. Organize reusable code for a task", "D. Automatically fix every error"],
        answer: "C"
    }
];

// Initializing score
let score: number = 0;

// Creating readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompting the user for their name
rl.question("Enter your name: ", function(name: string) {
    console.log("");
    console.log("Welcome, " + name + "!");
    console.log("Get ready to test your technology knowledge.");

    // Function to ask questions
    function askQuestion(index: number): void {
        if (index >= questions.length) {
            console.log("");
            console.log("Quiz completed!");
            console.log("Your final score is: " + score + "/" + questions.length);

            if (score >= 8) {
                console.log("Excellent! You're a Technology Master!");
            } else if (score >= 5) {
                console.log("Good job! Keep learning and improving!");
            } else {
                console.log("Don't give up! Keep practising!");
            }

            rl.close();
            return;
        }

        console.log("");
        console.log("Question " + (index + 1) + ": " + questions[index].question);

        for (let j = 0; j < questions[index].options.length; j++) {
            console.log(questions[index].options[j]);
        }

        rl.question("Your answer (A, B, C, or D): ", function(userAnswer: string) {
            if (userAnswer.trim().toUpperCase() === questions[index].answer) {
                console.log("Correct answer!");
                score++;
            } else {
                console.log("Wrong answer!");
                console.log("The correct answer is: " + questions[index].answer);
            }

            askQuestion(index + 1);
        });
    }

    // Starting the quiz
    askQuestion(0);
});
