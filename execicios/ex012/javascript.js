function carregar() {
        var res = document.getElementById('res')
        var valor = document.getElementById('pre') 
        var preco = valor.value 
        var desconto = 5 / 100
        var promo = (- preco * desconto) + preco
        res.innerHTML = `O produto no valor de R$${preco} reais com desconto de 5% saira por R$${promo} reais`
}