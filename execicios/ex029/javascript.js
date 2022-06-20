function carregar() {
    let res = document.getElementById('res')
    let n = document.getElementById('nome')
    let nome = n.value
    let s = document.getElementById('salario')
    let tt = document.getElementById('tt')
    let salario = Number(s.value)
    let tempotrabalho = Number(tt.value)

    if (tempotrabalho <= 3) {
        salario = salario * 0.03 + salario
        res.innerHTML = `Olá <strong>${nome}</strong>, seu salário com reajuste de <em>3%</em> é de <ins>R$${salario} reais</ins>`
    } else if (tempotrabalho > 3 && tempotrabalho <= 10) {
        salario = salario * 0.125 + salario
        res.innerHTML = `Olá <strong>${nome}</strong>, seu salário com reajuste de <em>12</em>.5% é de <ins>R$${salario} reais</ins>. `
    } else {
        salario = salario * 0.200 + salario
        res.innerHTML = `Olá <strong>${nome}</strong>, seu salário com reajuste de <em>20% </em>é de <ins>R$${salario} reais</ins>.`
    }
}