const person = {
    name: 'Carlos',
    greet: function () { console.log('Hello', this.name) }

}

//bind permite   inyectar name a la funcion anonima
//const greet = person.greet.bind({name: 'Alfred'})
//greet()


person.greet.call({name:'Juan'})
person.greet.apply({name:'Rola'})