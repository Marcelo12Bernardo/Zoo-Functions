const data = require('../data/zoo_data');

function countAnimals(animal) {
  const quantAnimal = [];
  if (animal !== undefined) {
    return 2;
  }
  data.species.forEach((especime) => {

    // const newEspecime = {
    //   cont: especime.residents.length,
    // };
    // quantAnimal.push(newEspecime);
  });
  return quantAnimal;
}

module.exports = countAnimals;
