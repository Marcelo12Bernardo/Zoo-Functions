const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((item) => item.managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const colaboradoras = [];
    data.employees.forEach((person) => {
      if (person.managers.includes(managerId)) {
        colaboradoras.push(`${person.firstName} ${person.lastName}`);
      }
    });
    return colaboradoras;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
