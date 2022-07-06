function carregar() {
    var nasc = document.getElementById('nasc')
    var nascimento = nasc.value
    var idade = 2022 - nascimento
    if (idade == 0 || idade == 2023) {
        res.innerHTML = `[ERRO] Digite a data novamente`
    } else if (idade < 16) {
        res.innerHTML = `Você tem ${idade} anos, portanto você não pode votar`
    } else if (idade >= 16 && idade < 18) {
        res.innerHTML = `Você tem ${idade} anos, portanto você pode votar mas o voto não é obrigatório`
    } else if (idade >= 18 && idade < 65) {
        res.innerHTML = `Você tem ${idade} anos, portanto o voto é obrigatório.`
    } else {
        res.innerHTML = `Você tem ${idade} anos, portanto o voto não é mais obrigatório`
    }
}