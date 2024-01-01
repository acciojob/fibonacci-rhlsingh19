function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let fibArray = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[num];
  }
}



module.exports = fibonacci;
