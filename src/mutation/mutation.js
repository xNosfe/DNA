const mutationFunc = (ADN) => {
  let hasMutationHorizontal = 1;
  let hasMutationVertical = 1;
  let hasMutationDiagonal = 1;

  const ADNMatrix = createMatrix(ADN)
  
  ADNMatrix.forEach((cadena,fila) => {

    cadena.forEach((letra,columna)=>{
      if(hasMutationHorizontal === 4 || hasMutationVertical === 4 ||hasMutationDiagonal ===4) {
        return;
      }
      if(letra === cadena[columna+1]) {
        hasMutationHorizontal++;
      } else {
        hasMutationHorizontal = 1;
      }//Checa Horizontalmente
      if(!!ADNMatrix[fila + 3]) {
        if (letra == ADNMatrix[fila + 1][columna] &&   letra == ADNMatrix[fila + 2][columna] && letra == ADNMatrix[fila + 3][columna]) {
          hasMutationVertical = 4;
          return;
        }//Checha Vertical 
        if (letra == ADNMatrix[fila + 1][columna + 1] && letra == ADNMatrix[fila + 2][columna + 2] && letra == ADNMatrix[fila + 3][columna + 3]) {
          hasMutationDiagonal =4;
          return;
        }// Checa en diagonal
      }
    })
    
  })
  
  if(hasMutationHorizontal === 4 || hasMutationVertical === 4 ||hasMutationDiagonal ===4){
    return 200;
   } else {
     return 403;
   }

}

const createMatrix= (ADN) => {
  return ADN.map(cadena=> cadena.split(''))
}


export default mutationFunc;