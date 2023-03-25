import { iMascota } from "./imascota";
import { Animal } from "./animal";

export class Gato extends Animal implements iMascota {
    private nombre: string
    constructor(P_Patas: number, nombre: string) {
        super(P_Patas);
        this.nombre = nombre;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public comer(): void {
        console.log("El gato come");
    }
    public jugar(): void {
        console.log("El gato juega");
    }
    public caminar(): void {
        console.log("El gato camina");
    }
}