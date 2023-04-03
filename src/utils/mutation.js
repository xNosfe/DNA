const mutationFunc = (ADN) => {
  let hasMutationHorizontal = 1;
  let hasMutationVertical = false;
  let hasMutationDiagonal = false;

  const ADNMatrix = createMatrix(ADN);

  ADNMatrix.forEach((cadena, fila) => {
    cadena.forEach((letra, columna) => {
      if (
        hasMutationHorizontal === 4 ||
        hasMutationVertical ||
        hasMutationDiagonal
      ) {
        return;
      }
      if (letra === cadena[columna + 1]) {
        hasMutationHorizontal++;
      } else {
        hasMutationHorizontal = 1;
      } //Checa Horizontalmente
      if (!!ADNMatrix[fila + 3]) {
        if (
          letra == ADNMatrix[fila + 1][columna] &&
          letra == ADNMatrix[fila + 2][columna] &&
          letra == ADNMatrix[fila + 3][columna]
        ) {
          hasMutationVertical = true;
          return;
        } //Checha Vertical
        if (
          letra == ADNMatrix[fila + 1][columna + 1] &&
          letra == ADNMatrix[fila + 2][columna + 2] &&
          letra == ADNMatrix[fila + 3][columna + 3]
        ) {
          hasMutationDiagonal = true;
          return;
        } // Checa en diagonal
      }
    });
  });

  if (
    hasMutationHorizontal === 4 ||
    hasMutationVertical ||
    hasMutationDiagonal
  ) {
    return true;
  } else {
    return false;
  }
};

const createMatrix = (ADN) => {
  return ADN.map((cadena) => cadena.split(""));
};

export default mutationFunc;
