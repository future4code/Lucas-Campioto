// Item A 

const printNumbers = (n: number) => {
    if (n >= 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  };

  // Item B

  const printNumbersDecreasing = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbers(n - 1);
    }
  };