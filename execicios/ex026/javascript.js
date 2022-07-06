function verificar() {
    var p1 = document.getElementById("p1")
    var p2 = document.getElementById('p2')
    var res = document.getElementById('res')
    var valor1 = Number(p1.value)
    var valor2 = Number(p2.value)
    if (valor1 == valor2) {
        res.innerHTML = `Não exite valor maior, os valores [<strong>${valor1}</strong>] e [<strong>${valor2}</strong> ] são iguais!`
    } else if (valor1 > valor2) {
        res.innerHTML = `O primeiro valor [<strong>${valor1}</strong>] é maior que o segundo valor [<strong>${valor2}</strong>]!`
    } else {
        res.innerHTML = `O segundo valor [<strong>${valor2}</strong>] é maior que o primeiro valor [<strong>${valor1}</strong>]!`
    }
}