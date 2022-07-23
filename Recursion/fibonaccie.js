const nthFibNumber = (num) => {
    if(num === 1 || num === 2) return 1;
    return nthFibNumber(num-1) + nthFibNumber(num-2);
}

const result = nthFibNumber(7);
console.log(result);


