import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    listarTodas(): void;
    procurarPorId(id: number): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}