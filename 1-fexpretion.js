//Expresiones de funcion ejecutadas inmediatamente
const counter = (function(){
     let count =0
     return {
       
        inc:function(){count = count+1;},
        get:function(){console.log(count);},
     }
})()

counter.get()
counter.inc()
counter.inc()
counter.inc()
counter.get()