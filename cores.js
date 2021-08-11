let cor1 = 'amarelo'
let cor2 = 'vermelho'

if (cor1 === 'azul' && cor2 === 'azul') {
  console.log('azul')
} else if (cor1 === 'amarelo' && cor2 === 'amarelo') {
  console.log('amarelo')
} else if (cor1 === 'vermelho' && cor2 === 'vermelho') {
  console.log('vermelho')
} else if (cor1 === 'azul' && cor2 === 'amarelo' || cor1 === 'amarelo' && cor2 === 'azul') {
  console.log('verde')
} else if (cor1 === 'azul' && cor2 === 'vermelho' || cor1 === 'vermelho' && cor2 === 'azul') {
  console.log('roxo')
} else if (cor1 === 'vermelho' && cor2 === 'amarelo' || cor1 === 'amarelo' && cor2 === 'vermelho') {
  console.log('laranja')
}