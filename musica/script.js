function criarTabela(conteudo) {
  var tabela = document.createElement('table')
  var thead = document.createElement('thead')
  var tbody = document.createElement('tbody')
  var table = function (i) {
    return i == 0 ? 'th' : 'td'
  }
  for (var i = 0; i < conteudo.length; i++) {
    var tr = document.createElement('tr')
    for (var o = 0; o < conteudo[i].length; o++) {
      var t = document.createElement(table(i))
      var texto = document.createTextNode(conteudo[i][o])
      t.appendChild(texto)
      tr.appendChild(t)
    }
    i == 0 ? thead.appendChild(tr) : tbody.appendChild(tr)
  }
  tabela.appendChild(thead)
  tabela.appendChild(tbody)
  return tabela
}
document
  .getElementById('tabela')
  .appendChild(
    criarTabela([
      ['TOP MUSICAS DO SECULO'],
      ['TAKE ON ME'],
      ['SWEET CHILD O MINE'],
      ['SMELLS LIKE TEEN SPRIT'],
      ['ANOTHER ONE BITES THE DUST']
    ])
  )
