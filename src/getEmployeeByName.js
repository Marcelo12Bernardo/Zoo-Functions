const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees.find((people) => people.firstName === employeeName
    || people.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
