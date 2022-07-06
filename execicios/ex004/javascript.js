function somar(){
    var vn1 = document.getElementById('txtn1')
    var vn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(vn1.value)
    var n2 = Number(vn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${s}</strong>`
}