pares = [[0,4],[2,4],[3,5],[3,1],[4,4]];

eIgual = (a, b) => a == b;

pares.forEach(element => {
    console.log(`${element[0]} e ${element[1]} são iguais? ${eIgual(...element)}`);
});

