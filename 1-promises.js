const url = 'https://ejemplo.org/datosJson'

//la  funcion then permite esperar a que se obtenga la respuesta
//y en ese momento se ejecuta la funcion anonima.
fetch(url)
    .then(function (res) {

        return res.json()

    })
    .then(function (json) {
        return ({ importData: json.importantData })

    })
    .then(function (data) {

        console.log(data)
    })
    .catch(function (err) {

        //manejo de errores
    })
