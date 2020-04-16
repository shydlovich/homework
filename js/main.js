// function sum(s) {
//   var number = 0;

//   function f(s){
//     if(s) {
//       number += s;
//         return f;
//     } else {
//       return number;
//     }
//   }
//   return f(s);
// }
// alert( sum(19)(52)(4)(24)(4)());




// ************домашнее задание номер 2************

var fn1 = () => {
  console.log('fn1')
  return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
  console.log('fn2')
  setTimeout(() => resolve(2), 1000)
})

function promiseReduce(asyncFunctions = [], reduce, initialValue = 0) {

  let promise = Promise.resolve(initialValue);

  asyncFunctions.forEach(

    func => promise = promise.then(

      async number => {

        try {
          return reduce(number, await func());
        } catch (e) {
          console.warn(`${funs.name} failed with ${e}`);
          return number;
        }

      }

    )

  );

  return promise;

}

promiseReduce([fn1, fn2], function (memo, value) {
  console.log('reduce')
  return memo * value
  },1)
       .then(console.log)

