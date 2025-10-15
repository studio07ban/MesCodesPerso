function fibonacci(n) {
 let result = [0, 1];
 let first = 0;
 let second = 1;
 let next;
 
 if (n <= 1) return [0].slice(0, n);
 if (n === 2) return result; 
 
    for(let i = 2; i < n; i++) {
// Fn   = Fn-1 + Fn-2 (Suite de Fibonacci)
// Next = i-1  + i-2  
    next = result[i -1] + result[i - 2];
    result.push(next);
    }
 return result;
}

console.log(fibonacci(20));
// Expected : [0,1,1,2,3,5,8,13]