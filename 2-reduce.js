const total = [0,1,2,3,4].reduce(function(valorAnterior,valorActual,indice,vector){
  
    return valorAnterior + valorActual
  })
  
  console.log(total)