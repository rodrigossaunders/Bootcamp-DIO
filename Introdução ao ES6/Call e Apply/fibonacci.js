

const fibonacci = n => {
    if(n == 2) {
        return 1;
    }
    if(n == 1) {
        return 1;
    }
    return fibonacci(n-2) + fibonacci(n-1)
}

const seqFibonacci = n => {
    arr = [];
    for(i=1; i<=n;i++) {
        arr.push(fibonacci(i));
    }
    return arr;
}
console.log(seqFibonacci(3));