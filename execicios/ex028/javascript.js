function carregar() {
    let res = document.getElementById('res')
    let l = document.getElementById('largura')
    let c = document.getElementById('comprimento')
    let largura = Number(l.value)
    let comprimento = Number(c.value)
    let area = largura * comprimento

    if (area < 100) {
        res.innerHTML = `A área do terreno é de <strong>${area}m<sup>2</sup></strong> portanto é um <em>TERRENO POPULAR.</em>`
    } else if (area >= 100 && area <= 500) {
        res.innerHTML = `A área do terreno é de <strong>${area}m<sup>2</sup></strong> portanto é um <em>TERRENO MASTER</em>.`
    } else {
        res.innerHTML = `A área do terreno é de <strong>${area}m<sup>2</sup></strong> portanto é um <em>TERRENO VIP</em>.`
    }
        
}