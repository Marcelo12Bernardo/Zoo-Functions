const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const daysWeek = Object.keys(hours);

const completeWeek = () => {
  const semanaCompleta = daysWeek.reduce((acc, day) => {
    const funcionamento = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const animaisDisponiveis = species.filter((animal) => animal.availability
      .includes(day)).map((nameAnimal) => nameAnimal.name);
    acc[day] = {
      officeHour: funcionamento,
      exhibition: animaisDisponiveis,
    };
    return acc;
  }, {});
  // Não abre
  semanaCompleta.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return semanaCompleta;
};

function getSchedule(scheduleTarget) {
  const animalProcurado = species.find((animal) => animal.name === scheduleTarget);
  if (animalProcurado !== undefined) {
    return animalProcurado.availability;
  }
  if (daysWeek.includes(scheduleTarget)) {
    const agenda = completeWeek();
    return { [scheduleTarget]: agenda[scheduleTarget] };
  }
  // Caso não receba parametro ou o parametro não seja valido
  return completeWeek();
}

module.exports = getSchedule;
