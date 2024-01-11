const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {

    const agregandoCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    }

    const registro = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))

    registro.push(agregandoCita)

    fs.writeFileSync('citas.json', JSON.stringify(registro))
}

const leer = () => {
    const leerCita = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    return leerCita
}

module.exports = { registrar, leer }