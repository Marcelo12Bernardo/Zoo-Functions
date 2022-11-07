const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  if (ids !== undefined) {
    const epc = data.species.filter((item) => item.id === ids);
    return epc;
  }
  return [];
}

module.exports = getSpeciesByIds;
