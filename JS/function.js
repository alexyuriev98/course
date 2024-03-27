"use stirct";

let num = 20

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello');
console.log(num);

// создаем функцию калькулятор (calc) и задаем ей 2 аргумента в () a и b, говорим функции вернуть выражение (a+b)
// После return мы ничего не задаем, потому что функция заканчивается после return и ничего не выдает
// Функция возвращает только переменные заданые внутри неё, если вывести переменную из функции глобально, то получим undefined 
// Функция работает ещё до того как она была вызвана



console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 4));

function calc(a, b) {
    return (a + b);
}


//  мы ставим точку с запятой после express funtion потому что создается переменная, после fucntion declaration можно не ставить
//  Функция выражения создается только тогда, когда до неё доходит поток кода и её можно вызвать только после объявления

const logger = function () {
    console.log('hello')
};

logger();


// Стрелочная функция, не имеет своего контекста
// Если она умещается в одну строчку - фигурная скобки можно опускать

const calc = (a, b) => {return a + b };