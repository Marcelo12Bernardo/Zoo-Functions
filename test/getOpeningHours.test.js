const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const objEsperado = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('Verifica se retorna objeto padrao', () => expect(getOpeningHours()).toEqual(objEsperado));
  it('Verifica se o zoo esta fechado', () => expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed'));
  it('Verifica se o zoo esta fechado', () => expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed'));
  it('Verifica se o zoo esta abberto', () => expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open'));
  it('Verifica se o zoo esta abberto', () => expect(getOpeningHours('Friday', '11:00-AM')).toEqual('The zoo is open'));
  // erros esperados
  const hourError = 'The hour should represent a number';
  const hourError2 = 'The hour must be between 0 and 12';
  const minuteError = 'The minutes must be between 0 and 59';
  const minuteError2 = 'The minutes should represent a number';
  const dayError = 'The day must be valid. Example: Monday';
  const xxError = 'The abbreviation must be \'AM\' or \'PM\'';
  // testa se retorna os  erros corretos
  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção', () => expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(dayError));
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção', () => expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(xxError));
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção', () => expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(hourError));
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção', () => expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow(minuteError2));
  it('Para os argumentos Monday e 13:00-AM deve lançar uma exceção', () => expect(() => getOpeningHours('Saturday', '13:00-AM')).toThrow(hourError2));
  it('Para os argumentos Tuesdaay e 09:60-AM deve lançar uma exceção', () => expect(() => getOpeningHours('Saturday', '09:60-AM')).toThrow(minuteError));
  it('Verifica se ao passar \'qualquer coisa\' retorna um erro', () => expect(() => getOpeningHours('Ramdom')).toThrow(dayError));
  it('Verifica se ao passar \'qualquer coisa\' no horario retorna um erro', () => expect(() => getOpeningHours('Saturday', 'Ramdom')).toThrow(hourError));
});
