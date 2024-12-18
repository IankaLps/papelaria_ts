import readlinesync = require('readline-sync')
import { colors } from './util/Colors'
import { ProdutoController } from './src/controller/ProdutoController'
import { ProdutoPapelaria } from './src/model/ProdutoPapelaria'

export function main() {
    let opcao, id, tipo, preco: number
    let nome, marca: string
    let quantidade: number
    let tipoProduto = ['Material para Organizacao', 'Material Escolar', 'Material de Impressao', 'Material para Presentes e Decoracao']

    const produtoController = new ProdutoController()

    // Objetos de Teste
    produtoController.cadastrar(
        new ProdutoPapelaria(
            produtoController.gerarId(),
            'Papel A4 Branco (500 folhas)',
            3,
            25.0,
            'Chamex',
            100
        )
    )
    produtoController.cadastrar(
        new ProdutoPapelaria(
            produtoController.gerarId(),
            'Caneta',
            2,
            3.5,
            'Bic',
            100
        )
    )

    while (true) {
        console.log(
            colors.bg.black,
            colors.fg.whitestrong,
            '*****************************************************')
        console.log('                                                     ')
        console.log('                     PAPELARIA                       ')
        console.log('                                                     ')
        console.log('*****************************************************')
        console.log('                                                     ')
        console.log('            1 - Criar Produto                         ')
        console.log('            2 - Listar todos os Produtos              ')
        console.log('            3 - Buscar Produto por Id                 ')
        console.log('            4 - Atualizar Dados do Produto            ')
        console.log('            5 - Apagar Produto                        ')
        console.log('            6 - Sair                                  ')
        console.log('                                                     ')
        console.log('*****************************************************')
        console.log(
            '                                                     ',
            colors.reset
        )

        console.log('Entre com a opcao desejada: ')
        opcao = readlinesync.questionInt('')

        if (opcao === 6) {
            console.log(
                colors.fg.magentastrong,
                '\nPapelaria - Tenha um otimo dia!')
            sobre()
            console.log(colors.reset, '')
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.yellowstrong,'\n\nCriar Produto\n\n',colors.reset)
                nome = readlinesync.question('Digite o Nome do Produto: ')

                tipo = readlinesync.keyInSelect(tipoProduto, '', {
                    cancel: false,
                }) + 1

                preco = readlinesync.questionFloat('Digite o preco: ')
                marca = readlinesync.question('Digite a Marca do Produto: ')
                quantidade = readlinesync.questionInt('Digite a Quantidade do Produto: ')

                produtoController.cadastrar(
                    new ProdutoPapelaria(
                        produtoController.gerarId(), nome, tipo, preco, marca, quantidade
                    )
                )

                keyPress()
                break
            case 2:
                console.log(
                    colors.fg.yellowstrong,
                    '\n\nListar todos os Produtos\n\n',
                    colors.reset
                )

                produtoController.listarTodas()

                keyPress()
                break
            case 3:
                console.log(
                    colors.fg.yellowstrong,
                    '\n\nConsultar dados do Produto - por Id\n\n',
                    colors.reset
                )

                id = readlinesync.questionInt('Digite o Id: ')
                produtoController.procurarPorId(id)

                keyPress()
                break
            case 4:
                console.log(
                    colors.fg.yellowstrong,
                    '\n\nAtualizar dados do Produto\n\n',
                    colors.reset
                )

                id = readlinesync.questionInt('Digite o Id do Produto: ')

                // Verifica se o Produto existe
                let produto = produtoController.buscarNoArray(id)

                if (produto !== null) {
                    nome = readlinesync.question('Digite o Nome do Produto: ')

                    tipo = produto.tipo

                    preco = readlinesync.questionFloat('Digite o preco: ')
                    marca = readlinesync.question('Digite a Marca do Produto: ')
                    quantidade = readlinesync.questionInt('Digite a Quantidade do Produto: ')

                    produtoController.atualizar(
                        new ProdutoPapelaria(id, nome, tipo, preco, marca, quantidade)
                    )
                } else console.log('Produto nao Encontrado!')

                keyPress()
                break
            case 5:
                console.log(
                    colors.fg.yellowstrong,
                    '\n\nApagar um Produto\n\n',
                    colors.reset
                )

                id = readlinesync.questionInt('Digite o Id: ')
                produtoController.deletar(id)

                keyPress()
                break
            default:
                console.log(
                    colors.fg.yellowstrong,
                    '\nOpção Inválida!\n',
                    colors.reset
                )

                keyPress()
                break
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log('\n*****************************************************')
    console.log('Projeto Desenvolvido por: Ianka Lps')
    console.log('github.com/IankaLps')
    console.log('*****************************************************')
}

function keyPress(): void {
    console.log(colors.reset, '')
    console.log('\nPressione enter para continuar...')
    readlinesync.prompt()
}

main()