function carregar() {
    var dinheiro = document.getElementById('din')
    var real = dinheiro.value 
    var dolares = 3.45
    var compra = real / dolares
    var res = document.getElementById('msg')
    res.innerHTML = `Com R$${real} reais você poderá comprar US$${compra.toFixed(2).replace('.', ',')} dolares`
}