export abstract class Produto {
    // Atributos
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    // Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }

    // -------- Métodos Get e Set --------------
    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(value: number) {
        this._preco = value;
    }

    public visualizar(): void {
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Material para Organização";
                break;
            case 2:
                tipo = "Material Escolar";
                break;
            case 3:
                tipo = "Material de Impressão";
                break;
            case 4:
                tipo = "Material para Presentes e Decoração";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Id: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + tipo);
        console.log("Preço: R$ " + this._preco.toFixed(2));
    }
}