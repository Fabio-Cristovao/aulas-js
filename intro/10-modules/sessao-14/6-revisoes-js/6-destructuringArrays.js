
/// DESTRUCTURING ARRAYS
let arr =  [1,2,3];

/* let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a);
console.log(b);
console.log(c); */

// destructuring
 let [a,b,c] = arr;

console.log(a);
console.log(b);
console.log(c);


let [d,e,v, ...outros] = [1,2,3,4,5,6,7,8,9];
console.log(outros);

