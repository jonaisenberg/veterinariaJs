const { registrar, leer } = require('./operaciones')

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if (operacion === 'registrar') {
    registrar(nombre, edad, animal, color, enfermedad)
    console.log('se ha registrado')
} else if (operacion === 'leer') {
    const leyendoCita = leer()
    console.log(leyendoCita)
    console.log('lectura exitosa!')
}