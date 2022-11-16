let result = document.getElementById('result')

function calcularImc() {

    let name = document.getElementById('name').value
    let weight= Number(document.getElementById('weight').value)
    let height = Number(document.getElementById('height').value)
    let imc = Number(weight / (height * height)).toFixed(2)


    if (imc < 18.5) {
        result.innerHTML = `Olá ${name}, seu IMC é: ${imc} - Abaixo do peso`
    } else if (imc >= 18.5 && imc <= 24.9) {
        result.innerHTML = `Olá ${name}, seu IMC é: ${imc} - Peso Normal`
    } else if (imc >= 25 && imc <= 29.9) {
        result.innerHTML = `Olá ${name}, seu IMC é: ${imc} - Sobrepeso`
    } else if (imc >= 30 && imc <= 34.9) {
        result.innerHTML = `Olá ${name}, seu IMC é: ${imc} - Obesidade grau 1`
    } else if (imc >= 35 && imc <= 39.9) {
        result.innerHTML = `Olá ${name}, seu IMC é: ${imc} - Obesidade grau 2`
    } else {
        result.innerHTML = `Olá ${name}, seu IMC é: ${imc} - Obesidade grau 3`
    }
}

function limpar() {
    result.innerHTML = ''
    document.getElementById('weight').value = ''
    document.getElementById('height').value = ''
    document.getElementById('name').value = ''
}