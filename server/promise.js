const a = 8;

function square(a) {
  return a * a;
}

setTimeout(() => {
  console.log("timer 1");
}, 3000);
setTimeout(() => {
  console.log("timer 1");
}, 3000);

setTimeout(() => {
  console.log("timer 2");
}, 5000);

setTimeout(() => {
  console.log("timer 3");
}, 0);

setTimeout(() => {
  console.log("timer 4");
}, 1000);

console.log(square(a));


//64
// timer 3
// timer 4
// timer 1
// timer 2

//
