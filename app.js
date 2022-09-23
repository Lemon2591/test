// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 5;

// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] !== target) {
//     console.log(-1);
//   } else {
//     if (nums[i] === target) {
//       console.log(i);
//     }
//   }
// }
// const obj = { foo: 1 };
// function foo(input) {
//   let a = 100;
//   if (input) {
//     let b = a + 1;
//     var c = a + 1;
//   }
//   console.log(c);
//   console.log(b);
// }

// foo(true);

// function res2s() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved"), 2000;
//     });
//   });
// }
// async function asyncCall() {
//   console.log("calling");
//   var result = await res2s();
//   console.log(result);
// }

// asyncCall();
// console.log("has called");
// function myA(...params) {
//   return params;
// }

// let a = myA(1, 23, 4);

// console.log(a);
// const add = (a = 10, b = 5) => a + b;
// console.log(add(5, 4));
// console.log(add(3));
// console.log(add(null, 9));
// console.log(add(undefined, 9));
// console.log(add());

// [1, 3, 4, 2, 7, 9, 10, 6, 8][(1, 3, 9, 11, 5, 7, 13)];

// const arr1 = [1, 3, 4, 2, 7, 9, 10, 6, 8];
// const arr2 = [1, 3, 9, 11, 5, 7, 13];
// let arr = [];

// arr1.sort(function (a, b) {
//   return a - b;
// });

// arr2.sort(function (a, b) {
//   return a - b;
// });

// for (var i = 0; i < arr1.length; i++) {
//   for (var j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       arr.push(arr1[i]);
//     }
//   }
// }

// console.log(arr);
