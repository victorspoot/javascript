function ex002() {
    var n = document.getElementById('txtnome')
    var nome = n.value
    var res = document.querySelector('div#res_dois')
    res.innerHTML = `Prazer em te conhecer ${nome}!`
}

function ex003() {
    var nome = document.getElementById('txtnome')
    var salario = document.getElementById('sal')
    var res = document.getElementById('res_tres')
    var n1 = nome.value
    var sal = salario.value
    res.innerHTML = `Nome do funcionario: ${n1}</br>`
    res.innerHTML += `Salário: R$${sal} reais</br>`
    res.innerHTML += `O funcionário ${n1} tem um salário de R$${sal} reais.`
}

