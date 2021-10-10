person = { nome: 'Rodrigo', idade: 22 }

idades = [12, 14, 22, 24, 25, 29]
function isOlderThan() {
    console.log("Rodrigo é mais velho que: ")
    for(var i = 0; i < arguments.length; i++) {
        console.log(`O elemento ${i}? ${this.idade > arguments[i]}`)
    }
} 

isOlderThan.call(person,...idades); // (person, idade[0], idade[1]...)
isOlderThan.apply(person,idades); // (person, [idade[0], idade[1]...])
