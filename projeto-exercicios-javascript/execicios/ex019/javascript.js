    
function carregar() {
    var n1 = document.getElementById('nota1')
    var n2 = document.getElementById('nota2')
    var res = document.getElementById('res')
    var nota1 = Number(n1.value)
    var nota2 = Number(n2.value)
    var media = (nota1 + nota2)/2
    if (media <= 6) {
    res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno ficou abaixo da média.`
    }  else {
    res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno esta acima da média.`
}
}
