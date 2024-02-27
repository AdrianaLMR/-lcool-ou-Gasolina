document.getElementById('btn-calcular').addEventListener('click', function() {
    var alcoholPrice = parseFloat(document.getElementById('alcohol-price').value);
    var gasPrice = parseFloat(document.getElementById('gas-price').value);

    if (isNaN(alcoholPrice) || isNaN(gasPrice) || alcoholPrice <= 0 || gasPrice <= 0) {
        alert('Por favor, insira valores válidos para os preços do álcool e da gasolina.');
        return;
    }

    var message;
    if (alcoholPrice < gasPrice) {
        message = 'Vantagem do Álcool';
    } else if (alcoholPrice > gasPrice) {
        message = 'Vantagem da Gasolina';
    } else {
        message = 'Ambos combustíveis têm o mesmo custo';
    }

    var advantage = (alcoholPrice / gasPrice).toFixed(2);
    var resultDisplay = document.getElementById('result-display');
    resultDisplay.textContent = 'Resultado: ' + advantage + ' - ' + message;
});

document.getElementById('btn-refazer').addEventListener('click', function() {
    document.getElementById('alcohol-price').value = '';
    document.getElementById('gas-price').value = '';
    document.getElementById('result-display').textContent = 'Resultado: ';
});