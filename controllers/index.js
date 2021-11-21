const home = (req, res) => {
  res.send('FullStack Master')
}

const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.send('A soma é: ' + soma)
  } else {
    res.send('Calculadora')
  }
}

const par = (req, res) => {
  const isPar = req.params.num % 2 === 0
  if (isPar) {
    res.send('O numero é PAR.')
  } else {
    res.send('O numero é IMPAR.')
  }
}

module.exports = {
  home,
  calc,
  par,
}
