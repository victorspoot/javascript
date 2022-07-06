
function carregar() {
        var m = document.getElementById('dist')
        var res = document.getElementById('res')
        var metros = m.value 
        var km = metros / 1000
        var hm = metros / 100
        var dam = metros / 10
        var dm = metros * 10
        var cm = metros * 100
        var mm = metros * 1000
        res.innerHTML = `A distância de ${metros}m corresponde a:</br>`
        res.innerHTML += `${km}km ${dm.toFixed(1)}dm<br/>`
        res.innerHTML += `${hm}Hm ${cm.toFixed(1)}cm<br/>`
        res.innerHTML += `${dam}Dam ${mm.toFixed(1)}mm`
}