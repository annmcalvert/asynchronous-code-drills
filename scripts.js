//1

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

//2

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

//3

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

//4

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
    .then(res => res * 2)
    .then(res => res * 4)
    .then(res => res * 6)
    .then(console.log);