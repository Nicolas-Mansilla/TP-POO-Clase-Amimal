"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
var util_1 = require("util");
var ara_a_1 = require("./ara\u00F1a");
var pez_1 = require("./pez");
var gato_1 = require("./gato");
//-----------------------------------------------------------------------------
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales() {
        this.animales = new Array();
    }
    ListaDeAnimales.prototype.buscar = function (animal) {
        var indice = this.animales.findIndex(function (aa) { return (0, util_1.isDeepStrictEqual)(aa, animal); });
        this.mensajeError(animal, (indice >= 0) ? " encontrado/a!!!." : " no encontrado/a.");
        return (indice >= 0);
    };
    ListaDeAnimales.prototype.agregarAnimal = function (animal) {
        this.animales.push(animal);
        this.mensajeError(animal, " agregado/a!!!.");
    };
    ListaDeAnimales.prototype.removerAnimal = function (animal) {
        var indice = this.animales.findIndex(function (aa) { return (0, util_1.isDeepStrictEqual)(aa, animal); });
        if (indice >= 0) {
            this.mensajeError(animal, " ha sido elimnado/a!.");
            this.animales.splice(indice, 1);
        }
        else
            this.mensajeError(animal, " no encontrado/a.");
    };
    ListaDeAnimales.prototype.mensajeError = function (animal, mensaje) {
        if (animal instanceof ara_a_1.Araña)
            console.log(animal.constructor.name, mensaje);
        else if (animal instanceof pez_1.Pez)
            console.log(animal.constructor.name, animal.getNombre(), mensaje);
        else if (animal instanceof gato_1.Gato)
            console.log(animal.constructor.name, animal.getNombre(), mensaje);
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
