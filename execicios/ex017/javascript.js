function carregar() {
    var vel = document.getElementById('vel')
    var velocidade = vel.value 
    var res = document.getElementById('res')
    var res1 = document.getElementById('res1')
    var multa = (velocidade - 80) * 5
    if (velocidade > 80) {
        res.innerHTML = `Você esta acima do limite de velocidade, você foi multado no valor de <strong>R$${multa.toFixed(2).replace('.',',')} reais.</strong>`
    } else if (velocidade <= 80) {
        res1.innerHTML = `Você esta dentro da velocidade permitida, siga com segurança!`
    }
}