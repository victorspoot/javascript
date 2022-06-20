function carregar() {
    var largura = document.getElementById('largura')
    var altura = document.getElementById('altura')
    var l = largura.value 
    var a = altura.value 
    var area = a * l
    var tinta = area / 4
    var res = document.getElementById('res')
    res.innerHTML = `A quantidade de tinta necessária para o serviço é de ${tinta} litros` 
}