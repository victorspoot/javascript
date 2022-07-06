function carregar() {
    var n1 = document.getElementById('nume')
    var n = Number(n1.value) 
    var antecessor = n - 1
    var sucessor = n + 1
    var res = document.getElementById('res')
    res.innerHTML = `O Antecessor de <strong>${n}</strong> é <strong>${antecessor}</strong> e o Sucessor de <strong>${n}</strong> é <strong>${sucessor}</strong>`
}