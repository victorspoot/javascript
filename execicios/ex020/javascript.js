function carregar() {
    var numero = document.getElementById('numero')
    var n = Number(numero.value)
    var res = document.getElementById('msg')
    if (n % 2 == 1) {
        res.innerHTML = `O numero ${n} é ÍMPAR!`
    } else {
        res.innerHTML = `O numero ${n} é PAR!`
    }
}