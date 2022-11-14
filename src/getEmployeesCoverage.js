const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const findEmploy = employees.map((cuidador) => {
  const { id, firstName, lastName } = cuidador;
  const responsavelP = cuidador.responsibleFor.map((idAnimals) => species
    .find((specie) => specie.id === idAnimals).name);
  const locais = cuidador.responsibleFor.map((idAnimals) => species
    .find((specie) => specie.id === idAnimals).location);
  const dadosEmploy = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsavelP,
    locations: locais,
  };
  return dadosEmploy;
});
function getEmployeesCoverage(objEmploy) {
  let busca;
  if (!objEmploy) {
    return findEmploy;
  }
  if (objEmploy.name) {
    busca = findEmploy.find((name) => name.fullName.includes(objEmploy.name));
  }
  if (objEmploy.id) {
    busca = findEmploy.find((name) => name.id === objEmploy.id);
  }
  if (busca === undefined) {
    throw new Error('Informações inválidas');
  }
  return busca;
}

module.exports = getEmployeesCoverage;
