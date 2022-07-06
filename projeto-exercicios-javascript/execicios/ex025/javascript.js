function carregar() {
    var r1 = document.getElementById('reta1')
    var r2 = document.getElementById('reta2')
    var r3 = document.getElementById('reta3')
    var res = document.getElementById('res')
    var reta1 = Number(r1.value)
    var reta2 = Number(r2.value)
    var reta3 = Number(r3.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (reta1 >= reta2 + reta3) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else if (reta2 >= reta1 + reta3) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else if (reta3 >= reta1 + reta2) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else {
        res.innerHTML = `As medidas formam um triângulo!`
        img.setAttribute('src', 'triangulo.png')
        
    }
    res.appendChild(img)
}