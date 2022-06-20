function carregar() {
    var a1 = document.getElementById('a')
    var b1 = document.getElementById('b')
    var c1 = document.getElementById('c')
    var a = a1.value 
    var b = b1.value 
    var c = c1.value
    var delta = (b ** 2) - (4 * a * c)
    var res = document.getElementById('res')
    res.innerHTML = `O valor de DELTA é <strong>${delta}</strong>`
}