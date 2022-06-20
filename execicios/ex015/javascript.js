    function carregar() {
    var diastrabalhados = document.getElementById('diast')
    var dt = diastrabalhados.value 
    var dias = 200
    var salario = dt * dias
    var res = document.getElementById('res')
    res.innerHTML = `O funcionario trabalhou ${dt} dias, portanto seu salario é de R$${salario.toFixed(2)} reais`
    }
