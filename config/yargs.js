const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completada o pendiente la tarea'
    }
}



const argv = require('yargs')
    .command('crear', 'Creado exitosamente', opts)
    .command('actualizar', 'Genera cambios en nuestras tareas', opts)
    .command('borrar', 'Elinimando informacion de nuesta tarea', opts)
    .help()
    .argv;


module.exports = {
    argv
};