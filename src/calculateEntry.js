const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants !== {}) {
    const totalPorFaixa = {
      child: entrants.filter((person) => person.age < 18).length,
      adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
      senior: entrants.filter((person) => person.age >= 50).length,
    };
    return totalPorFaixa;
  }
  return 0;
}

function calculateEntry(entrants) {
  if (!entrants || JSON.stringify(entrants) === '{}') { return 0; }
  const totPessoas = countEntrants(entrants);
  const ingressoChild = data.prices.child;
  const ingressoAdult = data.prices.adult;
  const ingressoSenior = data.prices.senior;
  const valorTotal = (ingressoChild * totPessoas.child)
  + (ingressoAdult * totPessoas.adult)
  + (ingressoSenior * totPessoas.senior);
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
