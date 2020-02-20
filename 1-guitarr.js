//Construyendo una Guitarra, Paradigma Imperativo

const cuerdas = ['E','A','D','G','B','E']

function Guitarra(){
   //crear cabeza de la  guitarra y agregar  clavijas
    const cabeza = createElement('cabeza')
    for(let i=1;i<6;i++){
      const clavija = createElement('clavija')
      cabeza.append(clavija)
    }

// crear mastil y agregar trastes 
const mastil = createElement('mastil');
   for(let i=0; i<19;i++){
      const traste = createElement('traste');
      mastil.append(traste)
   }

   // crear cuerpo y agregar las cuerdas

   const cuerpo = createElement('cuerpo')
   cuerpo.append(mastil)
   cuerdas.forEach(tono => {
        const cuerda = createElement('cuerda')
        cuerda.tono(tono)
        cuerpo.append(cuerda)
   })
   return cuerpo
}