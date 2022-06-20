function carregar () {
    var valor = document.getElementById('valor')
    var res = document.getElementById('res')
    var v = valor.value 
    var dobro = v * 2
    var terca = v / 3
    res.innerHTML = `O DOBRO de [${v}] é ${dobro}</br>` 
    res.innerHTML += `A TERÇA PARTE de (${v}) é (${terca.toFixed(1)})`
}