"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var readlinesync = require("readline-sync");
var Cores_1 = require("./src/util/Cores");
function main() {
    var opcao;
    while (true) {
        console.log(Cores_1.colors.bg.black, Cores_1.colors.fg.yellow, "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", Cores_1.colors.reset);
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");
        if (opcao == 9) {
            console.log(Cores_1.colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Cores_1.colors.reset, "");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nCriar Conta\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            case 2:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            case 3:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            case 4:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            case 5:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            case 6:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nSaque\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            case 7:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nDepósito\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            case 8:
                console.log(Cores_1.colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", Cores_1.colors.reset);
                keyPress();
                break;
            default:
                console.log(Cores_1.colors.fg.whitestrong, "\nOpção Inválida!\n", Cores_1.colors.reset);
                keyPress();
                break;
        }
    }
}
exports.main = main;
/* Função com os dados da pessoa desenvolvedora */
function sobre() {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}
function keyPress() {
    console.log(Cores_1.colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();
