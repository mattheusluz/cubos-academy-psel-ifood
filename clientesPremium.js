let precos = [100, 250, 190, 100, 100, 190, 189, 199]

let total = precos.reduce((total, currentElement) => total + currentElement)

let maiorValor = precos.reduce(function (a, b) {
  return Math.max(a, b);
})

if (total > 1000 && maiorValor > 200) {
  console.log('PREMIUM')
} else if (total > 1000) {
  console.log('VIP')
} else {
  console.log('NORMAL')
}