function filterArray(arr) {
   const length = arr.length;
   for (let i = 0; i < length; i++) {
       const item = arr.shift();
       if (item >= 5) arr.push(item);
   }
   return arr;
}

console.log(filterArray([10, 20, 5, 3, 2, 15, 5]));

//push adds one or more elements to the back of an array
//shift removes the first element from an array and returns that removed element 