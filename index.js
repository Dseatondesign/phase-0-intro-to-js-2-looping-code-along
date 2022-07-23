// Code your solutions in this file
// for loop
// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }

function writeCards(names, event) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return results
}

function countDown(number){
  for (let i = 0; i <= number; i++) {
    console.log(i)
      }
}