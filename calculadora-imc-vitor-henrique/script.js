// Dev by Vitor

function calcularIMC(){
    // pegando os valores do input
    const peso_pessoa = parseFloat(document.getElementById('weight').value);
    const altura_pessoa = parseFloat(document.getElementById('height').value);
    // fazendo o calculo e armazenando em uma variavel
    let calculo_imc = peso_pessoa/(altura_pessoa*altura_pessoa);
    // validando os dados
    if (calculo_imc <= 0){
        document.getElementById('resultText').textContent = 'Por favor, preencha valores válidos';
    }
    else if (calculo_imc < 18.5){
        document.getElementById('resultText').textContent = `Seu IMC é ${calculo_imc}(Abaixo do peso).`;
    }
    else if (calculo_imc > 18.5 && calculo_imc < 24.9){  
        document.getElementById('resultText').textContent = `Seu IMC é ${calculo_imc}(Peso normal).`;
    }
    else if (calculo_imc > 25.0 && calculo_imc < 29.9){
        document.getElementById('resultText').textContent = `Seu IMC é ${calculo_imc}(Sobrepeso).`;
    }
    else if (calculo_imc > 30.0){
        document.getElementById('resultText').textContent = `Seu IMC é ${calculo_imc}(Obesidade).`;
    }
    else{
        document.getElementById('resultText').textContent = 'Por favor, preencha valores válidos';
    }
}

function limparCampos(){
    // caso o usuario não digite nada ele aparece o texto denovo
    document.getElementById('resultText').textContent = 'Preencha os campos e clique em "Calcular".';
    // valores voltar a ser nada
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}