function ex001() {
    var nome = document.getElementById('txtnome')
    var n = nome.value
    var res = document.querySelector('div#res')
    res.innerHTML = `Prazer em te conhecer ${n}!`

}