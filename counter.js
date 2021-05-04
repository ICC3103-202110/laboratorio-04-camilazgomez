// according to NodeJs literature, first you must run command
// "npm install prompt-sync" on terminal

const prompt = require('prompt-sync')({sigint:true});

function view(counter) {
        return(`      Count ${counter}\n\n      (+) (-)\n\n      (q) for quit\n\n`);
}

function update(msg, counter) {
    if (msg=='+') return counter+1;
    if (msg=='-') return counter-1;
    return counter;
}

function app(counter) {
    while(true) {
    const currentView= view(counter);
    console.clear();
    console.log(currentView);
    const msg= prompt("What would you do? ");
    if (msg=="q") break;
    counter=update(msg,counter);
    }
}
//suponemos inicializacion en 0
app(0);


