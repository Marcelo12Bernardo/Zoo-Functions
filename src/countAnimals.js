const data = require('../data/zoo_data');

function countAnimals(animal) {
  const newEspecime = {};
  if (animal !== undefined) {
    const especieProcurada = data.species.find((especime) => especime.name === animal.specie);
    if (animal.sex === undefined) {
      return especieProcurada.residents.length;
    }
    return especieProcurada.residents.filter((resi) => resi.sex === animal.sex).length;
  }
  data.species.forEach((especime) => {
    const nameEspecie = especime.name;
    const contEspecie = especime.residents.length;
    newEspecime[nameEspecie] = contEspecie;
  });
  return newEspecime;
}

module.exports = countAnimals;
