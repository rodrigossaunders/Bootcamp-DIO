//função original
function produto(a, b) {
    return a * b
}
console.log("Produto original: " + produto(3,4))

//arrow function
const produtoArrow = (a, b) => a*b;

console.log("Produto Arrow: " + produtoArrow(3,4));

//função original c/ currying
function produtoCurrying(a) {
    return function(b) {
        return a * b
    }
}

const triplo = produtoCurrying(3);
console.log("Triplo Currying: " + triplo(4));
console.log("Triplo Currying: " + produtoCurrying(3)(4));

//arrow function c/ currying
const produtoArrowCurrying = a => b => a * b;
const triploArrow = produtoArrowCurrying(3);
console.log("Triplo Arrow Currying: " + triploArrow(4));
console.log("Triplo Arrow Currying: " + produtoArrowCurrying(3)(4));