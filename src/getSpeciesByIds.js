const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return 'Insira um id!';
  }
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
