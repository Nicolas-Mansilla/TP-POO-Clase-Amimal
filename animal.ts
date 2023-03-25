export abstract class Animal {
    patas: number;

    constructor(P_Patas: number) {
        this.patas = P_Patas;
    }
    getPatas(): number { return this.patas }
    setPatas(patas: number): void { this.patas = patas; }

    abstract comer(): void;
    abstract caminar(patas: number): void;
}