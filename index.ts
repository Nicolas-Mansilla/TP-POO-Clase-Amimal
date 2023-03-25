// Diapositiva 9 - Ejercicios - En Clase
// Ejercicio Animales
// Hecho en clase el dia 23-03-2023.(En Grupo)
// ● Nicolas Mansilla
// ● Nicolas Ignacio Genta
// ● ? falta completar
// ● ? falta completar
// ● Mario Patronelli
//=============================================================================
import { Araña } from "./araña";
import { Gato } from "./gato";
import { ListaDeAnimales } from "./listaDeAnimales";
import { Pez } from "./pez";
//-----------------------------------------------------------------------------
const lista: ListaDeAnimales = new ListaDeAnimales();

let gatoUno = new Gato(4, "Silvestre");
let gatoDos = new Gato(4, "Benito");
let arañaUno = new Araña(8);

lista.agregarAnimal(gatoUno);
lista.agregarAnimal(arañaUno);
lista.agregarAnimal(new Pez("Rodolfo"));
console.log(lista);

lista.buscar(gatoUno);
lista.buscar(gatoDos);
lista.agregarAnimal(gatoDos);
console.log(lista);

lista.removerAnimal(arañaUno);
console.log(lista);