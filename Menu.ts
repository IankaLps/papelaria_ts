import readlinesync from "readline-sync";
import { colors } from "./util/Colors";
import { ProdutoPapelaria } from "./src/model/ProdutoPapelaria";

export function main() {

    let opcao, id, tipo, preco: number
    let nome, marca: string
    let quantidade: number
    let tipoProduto = ['Materiais de Escritório', 'Material para Organização', 'Material Escolar', 'Material de Impressão', 'Material para Presentes e Decoração']

    
    while (true) {
        console.log(colors.bg.black, colors.fg.whitestrong, 
            "*****************************************************");
        console.log("                CONTROLE DE PAPELARIA                ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Todos Produtos                ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************", 
        colors.reset);

        console.log("Escolha uma opção: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.magentastrong, 
                "\nObrigado por usar o Controle de Papelaria!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.yellow, "\n\nCadastrar Produto\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.yellow, "\n\nListar Todos Produtos\n\n", colors.reset);
                
                keyPress();
                break;
            case 3:
                console.log(colors.fg.yellow, "\n\nBuscar Produto por ID\n\n", colors.reset);
                
                keyPress();
                break;
            case 4:
                console.log(colors.fg.yellow, "\n\nAtualizar Produto\n\n", colors.reset);
                
                keyPress();
                break;
            case 5:
                console.log(colors.fg.yellow, "\n\nDeletar Produto\n\n", colors.reset);
                
                keyPress();
                break;
            default:
                console.log(colors.fg.yellow, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}



/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ianka Lopes");
    console.log("github.com/IankaLps");
    console.log("*****************************************************");
}



function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();