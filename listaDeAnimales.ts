import { isDeepStrictEqual } from "util";
import { Animal } from "./animal";
import { Araña } from "./araña";
import { Pez } from "./pez";
import { Gato } from "./gato";
//-----------------------------------------------------------------------------
export class ListaDeAnimales {
    private animales: Animal[];

    constructor() {
        this.animales = new Array();
    }
    public buscar(animal: Animal): boolean {
        const indice: number = this.animales.findIndex(aa => isDeepStrictEqual(aa, animal));

        this.mensajeError(animal, (indice >= 0)? ` encontrado/a!!!.`:` no encontrado/a.` );
        return (indice >= 0)
    }
    public agregarAnimal(animal: Animal): void {
        this.animales.push(animal);
        this.mensajeError(animal, ` agregado/a!!!.`);
    }
    public removerAnimal(animal: Animal): void {
        const indice: number = this.animales.findIndex(aa => isDeepStrictEqual(aa, animal));
        if (indice >= 0) {
            this.mensajeError(animal, ` ha sido elimnado/a!.`);
            this.animales.splice(indice, 1);
        }
        else
            this.mensajeError(animal, ` no encontrado/a.`);
    }

    private mensajeError(animal: Animal, mensaje: string): void {
        if (animal instanceof Araña)
            console.log(animal.constructor.name, mensaje);
        else if (animal instanceof Pez)
            console.log(animal.constructor.name, animal.getNombre(), mensaje);
        else if (animal instanceof Gato)
            console.log(animal.constructor.name, animal.getNombre(), mensaje);
    }

}