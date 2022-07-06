function carregar() {
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    var res = document.getElementById('res')
    var n1 = Number(p1.value)
    var n2 = Number(p2.value)
    var media = (n1 + n2) / 2
    if (media <= 4.9) {
        res.innerHTML = `Aluno com média <strong>${media.toFixed(1)} REPROVADO!</strong>`
    } else if (media >= 5.0 && media <= 6.9) {
        res.innerHTML = `Aluno com média <strong>${media.toFixed(1)} RECUPERAÇÂO!</strong>`
    } else if (media >= 7) {
        res.innerHTML = `Aluno com média <strong>${media.toFixed(1)} APROVADO!</strong>`
    }
}