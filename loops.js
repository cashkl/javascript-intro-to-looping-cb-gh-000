function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array[array.length]=`I am ${i} strange loop`
  }
}
function whileLoop(i != 0) {
  while (i) {
    console.log(i);
    i--;
  }
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do{
    delete array[array.length-1]
  }
  while(array.length > 0 && maybeTrue);
}
