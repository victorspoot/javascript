function carregar() {
    var n = document.getElementById('nome')
    var nome = n.value
    var res = document.getElementById('res')
    var v = document.getElementById('valor')
    var valor = Number(v.value)
    var desconto5 = 5 / 100
    var desconto15 = 15 / 100
    var descontof = (- valor * desconto15) + valor
    var descontom = (- valor * desconto5) + valor
    var sex = document.getElementsByName('radsex')
    if (sex[0].checked) {
        res.innerHTML = `Olá ${nome}, o valor do seu produto com 5% de desconto é de R$${descontom.toFixed(2).replace('.',',')} reais.`
    } else if (sex[1].checked) {
        res.innerHTML = `Olá ${nome}, o valor do seu produto com 15% de desconto é de R$${descontof.toFixed(2).replace('.',',')} reais`
    }
    
    

}