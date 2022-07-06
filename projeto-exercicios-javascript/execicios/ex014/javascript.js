    function carregar() { 
    var km = document.getElementById('kmp')
    var kmp = km.value 
    var dia = document.getElementById('dias')
    var dias = dia.value 
    var totalkm = kmp * 0.20
    var totaldias = dias * 90
    var total = totalkm + totaldias
    var res = document.getElementById('res')
    res.innerHTML = `O valor total de dias de locação é de R$${totaldias.toFixed(2)} reais<br/>`
    res.innerHTML += `O valor total de km percorridos é de R$${totalkm.toFixed(2)} reais<br/>`
    res.innerHTML += `O valor total a ser pago é de R$${total.toFixed(2)} reais`
 }
