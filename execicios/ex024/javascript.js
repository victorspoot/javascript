function carregar() {
    var d = document.getElementById('dist')
    var dist = Number(d.value) 
    var pkm200 = 0.50 * dist
    var pkm200mais = 0.45 * dist
    var res = document.getElementById('res')
    if (dist <= 200) {
        res.innerHTML = `O valor da viajem sera de R$${pkm200.toFixed(2).replace('.',',')} reais!`
    } else {
        res.innerHTML = `O valor da viajem sera de R$${pkm200mais.toFixed(2).replace('.',',')} reais!`
    }

}