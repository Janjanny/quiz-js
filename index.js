
const fetchQuiz = require('./fetchData')
const readline = require('readline');

const r1 = readline.createInterface( {
    input: process.stdin,
    output: process.stdout 
});

// const questions= [];
// const correctAnswers = [];
const answers = [];
const quizTypes = {amount: 0, difficulty: '', type:''}



async function askInput() {
    console.log('Define quiz type: \n');
    const amount = await askQuestions('No. of questions: ');
    quizTypes.amount = amount;

    const difficulty = await askQuestions('Quiz difficulty (Easy, Medium, Hard): ');
    quizTypes.difficulty = difficulty;

    const type = await askQuestions('Quiz type (multiple, boolean): ')
    quizTypes.type = type;


    r1.close();

}

const generateQuestions = async (quizTypes) => {
    const quiz = fetchQuiz(quizTypes.amount, quizTypes.difficulty, quizTypes.type);

    const questions_answers = quiz.results.map((eachQuiz) => ({
        question: eachQuiz.question,
        answer: eachQuiz.correct_answer
    }))

    console.log(questions_answers);
}

async function askQuestions() {

}


askInput().then(() => {
    console.log(generateQuestions(quizTypes))
});



// async function main() {
//     console.log('Enter 3 values: ');
//     for (let i = 0; i < 3; i++) {
//         const answer = await askQuestions(`Value ${i + 1} \n`);
//         userInputs.push(answer)
//     }

//     console.log('User inputs: ', userInputs);

//     r1.close();
// }

// main();

// console.log(userInputs)