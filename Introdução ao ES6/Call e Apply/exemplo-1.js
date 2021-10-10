var myself = {firstName: 'rodrigo', lastName: 'arroba xd'}

/* arrow functions não possuem escopo para this
const showFullNameArrow = () => `${this.firstName} ${this.lastName}`

console.log(showFullNameArrow.apply(myself)); // undefined
console.log(showFullNameArrow.call(myself)); // undefined
*/
function showFullName() { 
    return `${this.firstName} ${this.lastName}`
}

console.log(showFullName.apply(myself)) // rodrigo arroba xd
console.log(showFullName.call(myself)) // rodrigo arroba xd