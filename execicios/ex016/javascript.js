function carregar() {
    var cig = document.getElementById('cig')
    var ano1 = document.getElementById('ano')
    var cigarros = cig.value 
    var anos = ano1.value
    var dia = 1440
    var ano = 365
    var minutodevida = 10
    var diasdevida = cigarros * minutodevida
    var totano = anos * ano
    var totvida = totano * diasdevida
    var totvidadia = totvida / dia
    var res = document.getElementById('res')
    res.innerHTML = `Fumando ${cigarros} cigarros por dia durante ${anos} anos você perdeu ${totvidadia.toFixed(0)} dias do total da sua vida`
}