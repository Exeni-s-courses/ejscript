function memoize(fn) {
  var state;
  return function (...args) {
    const res = fn(...args)
    console.log(args, state)
    // Esto revisa una vez
    if (state && JSON.stringify(state.args) === JSON.stringify(args)) return state.res;
    console.log('once')
    state = { args: [...args], res }
    return fn(...args)
  }
}

// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// console.log(memoizedSum(2, 2)); // "call" - devuelve 4. Se llama a sum() porque (2, 2) no se había visto antes.
// console.log(memoizedSum(2, 2)); // "call" - devuelve 4. Pero sum() no se llamó porque los mismos argumentos ya se habían visto.
// // "getCallCount" - número total de llamadas: 1
// console.log(memoizedSum(1, 2)); // "call" - devuelve 3. Se llama a sum() porque (1, 2) no se había visto antes.
// // "getCallCount" - número total de llamadas: 2

const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
console.log(memoFactorial(2)); // "call" - devuelve 2.
console.log(memoFactorial(3)); // "call" - devuelve 6.
console.log(memoFactorial(2)); // "call" - devuelve 2. Pero factorial no se llamó porque 2 ya se había visto antes.
// "getCallCount" - número total de llamadas: 2
console.log(memoFactorial(3)); // "call" - devuelve 6. Pero factorial no se llamó porque 3 ya se había visto antes.
// "getCallCount" - número total de llamadas: 2