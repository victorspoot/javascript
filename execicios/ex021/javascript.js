function carregar() {
    var bi = document.getElementById('bi')
    var ano = Number(bi.value)
    var bissexto = ano % 4
    var res = document.getElementById('res')
    if (bissexto == 0) {
        res.innerHTML = `O ano de ${ano}  é BISSEXTO!`
    } else {
        res.innerHTML = `O ano e ${ano} não é BISSEXTO!`
    }
}