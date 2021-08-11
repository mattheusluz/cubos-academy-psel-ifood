var palavras = ["aveia", "manha", "ave"];

function solucao(primeiraLetra, segundaLetra, palavras) {
  let resultado = []
  for (let item of palavras) {
    if (item[0] === primeiraLetra && item[1] === segundaLetra) {
      resultado.push(item)
      console.log(item)
    }

  }
  if (resultado.length === 0) {
    console.log('NENHUMA')
  }
}


solucao('a', 'v', palavras)