//Construyendo una Guitarra   utilizando paradigma  Declarativo
//ESTO ES PSEUDO-CODIGO
const cuerdas = ['E','A','D','G','B','E']

function Guitarra(){
  return(
       <Guitarra>
           {cuerdas.map(nota => <Cuerda note={nota} />)}
    
       </Guitarra>

  )

}
