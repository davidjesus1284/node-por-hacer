const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

let cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();

    // let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    // if (listadoPorHacer.length === nuevoListado.length) {
    //     console.log('El listado aun no se ha eliminado');
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarDB();
    //     return true;
    // }

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index > -1) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        console.log('El listado aun no se ha eliminado');
        return false;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};