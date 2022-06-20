function carregar() {
    var a = document.getElementById('ano')
    var ano = Number(a.value)
    var idade = 2022 - ano
    var anosfaltam = 18 - idade
    var res = document.getElementById('res')
    if (idade < 18) {
        res.innerHTML = `Você tem ${idade} anos de idade, ainda faltam para o seu alistamento ${anosfaltam} anos.`
    } else if (idade > 18) {
        res.innerHTML = `Você tem ${idade} anos de idade, ja se passaram ${anosfaltam} anos do seu alistamento.`
    }
}