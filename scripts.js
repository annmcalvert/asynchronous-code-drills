let number;

function logMessage() {
    console.log('Number will be 2');
    return 2;
};

function logMultiply() {
    let product = number * 4;
    console.log(product);
}

number = logMessage();
logMultiply();
setTimeout(logMultiply, 2000);

function getWords() {
    console.log('BeetleJuice');
    setTimeout(() => {
        console.log('BeetleJuice, BeetleJuice');
    }, 3000);
    setTimeout(() => {
        console.log('BeetleJuice, BeetleJuice, BeetleJuice');
    }, 2000);
    setTimeout(() => {
        console.log('Oh shit!!!');
    }, 1000);
}

getWords();




function countdown(num, callback) {
    setTimeout(callback, num * 1000);
}

function done() {
    console.log('Eat a bag of DICKs.');
}

countdown(2, done);


// Create a global variable and set it equal to true or false
// Create a new promise named orderingChickenSandwich
// In the resolver function for the promise check if the global variable is true.
// If the global variable is true, create an object with two properties (key/value pair):
// sandwich : chicken
// veggies: lettuce
// Resolve the object
// If the global variable is false, create a variable and set it equal to a new Error. (hint)
// Reject this new variable
// Create a new function named orderFood that will call the promise you made and console log the result if the promise is fulfilled or if it is rejected
// Call the orderFood function and test each outcome

let chickenSandwich = true;

const orderingChickenSandwich = () => {
    return new Promise((resolve, reject) => {
        if (chickenSandwich) {
            resolve({ sandwich: 'chicken', veggies: 'lettuce' });
        } else {
            const e = new Error("Damn");
            reject(e);
        }
    })
}

function orderFood() {
    orderingChickenSandwich()
        .then(console.log)
        .catch(console.log);
}

orderFood();


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
    .then(res => res * 2)
    .then(res => res * 4)
    .then(res => res * 6)
    .then(console.log);