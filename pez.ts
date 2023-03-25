import { iMascota } from "./imascota";
import { Animal } from "./animal";

export class Pez extends Animal implements iMascota {
    private nombre: string;
    constructor(nombre: string) {
        super(0);
        this.nombre = nombre;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public comer(): void {
        console.log("el pez come")
    };
    public jugar(): void {
        console.log("el pez juega")
    };
    public caminar(): void {
        console.log("el pez no camina nada")
    };
}
