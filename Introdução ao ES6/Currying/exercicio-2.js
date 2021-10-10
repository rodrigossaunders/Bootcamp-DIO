
// função original
function primeiroGrau(a, b, x) {
    return a * x + b;
}
// calcula f(10) para f(x) = 6*x + 2
console.log(primeiroGrau(6, 2, 10));

// função em formato arrow
const primeiroGrauArrow = (a, b, x) => a * x + b;
// calcula f(10) para f(x) = 6*x + 2
console.log(primeiroGrauArrow(6, 2, 10));

// função original com currying
function primeiroGrauCurried(a) {
    return function(b) {
        return function(x) {
            return a*x + b
        }
    }
}
// calcula f(10) para f(x) = 6*x + 2
console.log(primeiroGrauCurried(6)(2)(10));

const celsiusParaFahrenheit = primeiroGrauCurried(9/5)(32);
// converte 30 C para Fahrenheit 
console.log(celsiusParaFahrenheit(30))