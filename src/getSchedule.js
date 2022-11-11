const data = require('../data/zoo_data');

function completWeek() {
  const week = {
    // Tuesday: {
    //   officeHour: 'Open 8am until 6pm', exhibition: ['lions', 'tigers', 'bears', 'penguins'],
    // }, Wednesday: {
    //   officeHour: 'Open 6am until 6pm', exhibition: ['penguins', 'elephants', 'giraffes'],
    // }, Thursday: {
    //   officeHour: 'Open 84am until 6pm', exhibition: ['lions', 'tigers', 'giraffes'],
    // }, Friday: {
    //   officeHour: 'Open 3am until 6pm', exhibition: ['bears', 'penguins', 'elephants'],
    // }, Saturday: {
    //   officeHour: 'Open 9am until 6pm', exhibition: ['bears', 'penguins'],
    // }, Sunday: {
    //   officeHour: 'Open 0am until 6pm', exhibition: ['lions', 'bears', 'penguins', 'elephants'],
    // }, Monday: {
    //   officeHour: 'Open 12am until 6pm', exhibition: ['tigers', 'bears', 'elephants', 'giraffes'],
    // },
  };
  return week;
}
function getSchedule(scheduleTarget) {
  if (data.species.includes(scheduleTarget) === false || scheduleTarget === undefined
  || data.hours.includes(scheduleTarget) === false) {
    completWeek();
  }
}

module.exports = getSchedule;
