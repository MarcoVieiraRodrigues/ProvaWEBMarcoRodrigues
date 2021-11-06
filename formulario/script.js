let input = document.querySelector('#name')
let input1 = document.querySelector('#email')
let input2 = document.querySelector('#phone')
let input3 = document.querySelector('#message')
let input4 = document.querySelector('#duvida')
var todos = input + input1 + input2 + input2 + input3 + input4

function verificarForm() {
  if (input.value.length <= 0) {
    alert('por favor preencha o campo nome')
  } else if (input1.value.length <= 0) {
    alert('por favor preencha o campo email')
  } else if (input2.value.length <= 0) {
    alert('por favor preencha o campo telefone')
  } else if (input3.value.length <= 0) {
    alert('por favor preencha o campo mensagem')
  } else if (input4.value.length <= 0) {
    alert('por favor preencha o campo duvida')
  } else {
    alert('mesagem enviada com sucesso')
  }
}
