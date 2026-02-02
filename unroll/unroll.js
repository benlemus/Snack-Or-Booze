function unroll(squareArray) {
  const squareCopy = squareArray.map((row) => [...row]);
  let result = [];

  while (squareCopy.length > 0) {
    squareCopy[0].map((i) => result.push(i));
    squareCopy.splice(0, 1);

    if (squareCopy.length === 0) return result;

    for (let i = 0; i < squareCopy.length; i++) {
      result.push(squareCopy[i][squareCopy[i].length - 1]);
      squareCopy[i].splice(squareCopy[i].length - 1, 1);
      if (squareCopy[i].length === 0) {
        squareCopy[i] = [];
      }
    }

    squareCopy[squareCopy.length - 1].reverse().map((i) => result.push(i));
    squareCopy.splice(squareCopy.length - 1, 1);

    if (squareCopy.length === 0) return result;

    for (let i = squareCopy.length - 1; i > 0; i--) {
      result.push(squareCopy[i][0]);
      squareCopy[i].splice(0, 1);
      if (squareCopy[i].length === 0) {
        squareCopy[i] = [];
      }
    }
  }
}

module.exports = unroll;
