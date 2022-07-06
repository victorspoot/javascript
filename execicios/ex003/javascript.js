function carregar() {
    var nome = document.getElementById('txtnome')
    var salario = document.getElementById('sal')
    var res = document.getElementById('res')
    var n1 = nome.value
    var sal = salario.value
    res.innerHTML = `Nome do funcionario: ${n1}</br>`
    res.innerHTML += `Salário: R$${sal} reais</br>`
    res.innerHTML += `O funcionário ${n1} tem um salário de R$${sal} reais.`
}