function carregar() {
    var valor = document.getElementById('valor')
    var desc = document.getElementById('desc')
    var v1 = Number(valor.value)
    var d = Number(desc.value)
    var desconto = (-v1 * d) / 100 
    var tot = (desconto + v1)
    var res = document.getElementById('res')
    res.innerHTML = `O valor do produto com desconto é de R$${tot.toFixed(2).replace('.',',')} reais`
}