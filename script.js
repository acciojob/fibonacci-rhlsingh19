
// your code here
	function fibonacci(num) {
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 0; // First term is considered 0 in the sequence
  } else if (num === 2) {
    return 1; // Second term is considered 1 in the sequence
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}



module.exports = fibonacci;
