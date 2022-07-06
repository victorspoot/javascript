        var p11 = document.querySelectorAll('esp')
        function calcular() {
            var nv1 = document.getElementById('v1')
            var nv2 = document.getElementById('v2')
            var n1 = Number(nv1.value)
            var n2 = Number(nv2.value)
            var cal = (n1 + n2) / 2
            res.innerHTML = `Primeira Nota: <strong>${n1}</strong></br>`
            res.innerHTML += `Segunda Nota: <strong>${n2}</strong></br>`
            res.innerHTML += `A média das notas é igual a <strong>${cal.toFixed(1)}</strong>`

        }