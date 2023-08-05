// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21];

/*
fibo[3] = fibo[2] + fibo[1]
fibo[4] = fibo[3] + fibo[2]
fibo[10] = fibo[9] + fibo[8]
fibo[i] = fibo[i-1] + fibo[i-2]
fibo[n] = fibo[n-1] + fibo[n-2]
 */

const fibo = [0, 1];
for(let i = 2; i<= 15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);