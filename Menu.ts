import readlinesync from "readline-sync";
import { colors } from "./util/Colors";

export function main() {

    let opcao: number;

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow, 
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
            console.log(colors.fg.greenstrong, 
                "\nObrigado por usar o Controle de Papelaria!");
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar Todos Produtos\n\n", colors.reset);
                
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por ID\n\n", colors.reset);
                
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", colors.reset);
                
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nDeletar Produto\n\n", colors.reset);
                
                keyPress();
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();