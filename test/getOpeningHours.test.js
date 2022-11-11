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
  // erros esperados
  const hourError = 'The hour should represent a number';
  const hourError2 = 'The hour must be between 0 and 12';
  const minuteError = 'The minutes must be between 0 and 59';
  const dayError = 'The day must be valid. Example: Monday';
  // testa se retorna os  erros corretos
  test('Verifica se ao passar \'qualquer coisa\' retorna um erro', () => expect(() => getOpeningHours('Ramdom')).toThrow(dayError));
  test('Verifica se ao passar a \'hora errada\' retorna um erro', () => expect(() => getOpeningHours('Monday', 'Ramdom')).toThrow(hourError));
  test('Verifica se ao passar o dia errado retorna um erro', () => expect(() => getOpeningHours('Ramdom', '08:00-AM')).toThrow(dayError));
  test('Verifica se ao passar uma \'hora maior que 12\' retorna um erro', () => expect(() => getOpeningHours('Monday', '17:00-AM')).toThrow(hourError2));
  test('Verifica se ao passar um \'minuto maior que 59\' retorna um erro', () => expect(() => getOpeningHours('Monday', '10:95-AM')).toThrow(minuteError));

});
