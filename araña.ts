import { Animal } from './animal';

export class Araña extends Animal {
    constructor(P_Patas: number) {
        super(P_Patas)
    }

    public comer() {
        console.log("La araña esta comiendo");
    }
    public caminar(patas: number) {
        console.log("La araña esta caminando");
    }
}