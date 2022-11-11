const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoaColaboradora = data.employees.find((cuidadores) => cuidadores.id === id);
  const primeiroResponsavel = pessoaColaboradora.responsibleFor[0];
  const especie = data.species.filter((animais) => animais.id === primeiroResponsavel);
  const maiorIdade = especie[0].residents.reduce((acc, curr) => Math.max(acc, curr.age), 0);
  const maisVelho = especie[0].residents.find((animal) => animal.age === maiorIdade);
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
