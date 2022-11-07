const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // return data.species.animal.every((animals) => animals.age >= age);
  const objAnimais = data.species.find((item) => item.name === animal);
  return objAnimais.residents.every((listAnimal) => listAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
