"use strict";
exports.__esModule = true;
// Diapositiva 9 - Ejercicios - En Clase
// Ejercicio Animales
// Hecho en clase el dia 23-03-2023.(En Grupo)
// ● Nicolas Mansilla
// ● Nicolas Ignacio Genta
// ● Nicolas Genta
// ● ? falta completar
// ● Mario Patronelli
//=============================================================================
var ara_a_1 = require("./ara\u00F1a");
var gato_1 = require("./gato");
var listaDeAnimales_1 = require("./listaDeAnimales");
var pez_1 = require("./pez");
//-----------------------------------------------------------------------------
var lista = new listaDeAnimales_1.ListaDeAnimales();
var gatoUno = new gato_1.Gato(4, "Silvestre");
var gatoDos = new gato_1.Gato(4, "Benito");
var arañaUno = new ara_a_1.Araña(8);
lista.agregarAnimal(gatoUno);
lista.agregarAnimal(arañaUno);
lista.agregarAnimal(new pez_1.Pez("Rodolfo"));
console.log(lista);
lista.buscar(gatoUno);
lista.buscar(gatoDos);
lista.agregarAnimal(gatoDos);
console.log(lista);
lista.removerAnimal(arañaUno);
console.log(lista);
