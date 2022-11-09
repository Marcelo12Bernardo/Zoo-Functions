const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Passando count deve retornar 4', () => expect(handlerElephants('count')).toEqual(4));
  it('Passando names deve retornar Jefferson', () => expect(handlerElephants('names').includes('Jefferson')).toBeTruthy());
  it('Passando averageAge deve retornar 10.5', () => expect(handlerElephants('averageAge')).toEqual(10.5));
  it('Passando popularity deve retornar um número igual ou maior a 5', () => expect(handlerElephants('popularity') >= 5).toBeTruthy());
  it('Passando availability deve retornar um array', () => expect(typeof handlerElephants('availability') === 'object').toBeTruthy());
  it('Availability não deve conter Monday', () => expect(handlerElephants('availability').includes('Monday')).toBeFalsy());
  it('Passando location deve retornar undefined', () => expect(handlerElephants()).toEqual(undefined));
  it('Passando location deve retornar uma string', () => expect(typeof handlerElephants('location') === 'string').toBeTruthy());
  it('Passando location deve retornar nw', () => expect(handlerElephants('location')).toEqual('NW'));
});
