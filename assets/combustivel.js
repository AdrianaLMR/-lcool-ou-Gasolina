function vantagemCombustivel() {

do {
    var gasolina = prompt('Digite o valor da gasolina: ');
    var álcool = prompt('Digite o valor do álcool: ');
    var repetir = true;
    var multiplicador = (parseInt(álcool) / parseInt(gasolina));
    console.log('O resultado da operação é: ' + multiplicador);

    if (multiplicador > 0.7) {
        console.log(' Vantagem da gasolina');
    } else if (multiplicador < 0.7) {
        console.log(' Vantagem do Álcool');
    } else if (multiplicador == 0.7) {
        console.log(' Ambos combustiveis são iguais, não há vantagem');
    } else {
        console.log('Para repetir a operação basta digitar 1');
    }
    resposta = prompt('Gostaria de efetuar uma nova operação(s/n): ');
    if (resposta == 'n') {
        repetir = false;
    }
} while (repetir);

}