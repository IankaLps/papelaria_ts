import { Produto } from "../model/Produto";

export class ProdutoPapelaria extends Produto {

    private _marca: string;
    private _quantidade: number;

    constructor(id: number, nome: string, tipo: number, preco: number, marca: string, quantidade: number) {
        super(id, nome, tipo, preco);
        this._marca = marca;
        this._quantidade = quantidade;
    }

    // -------- Métodos Get e Set --------------
    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(value: number) {
        this._quantidade = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Marca: " + this._marca);
        console.log(`Quantidade: ` + this._quantidade);
    }
}