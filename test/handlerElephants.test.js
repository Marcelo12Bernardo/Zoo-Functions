const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  const erro = 'Parâmetro inválido, é necessário uma string';
  it('Passando count deve retornar 4', () => expect(handlerElephants('count')).toEqual(4));
  it('Passando names deve retornar Jefferson', () => expect(handlerElephants('names').includes('Jefferson')).toBeTruthy());
  it('Passando averageAge deve retornar 10.5', () => expect(handlerElephants('averageAge')).toEqual(10.5));
  it('Passando location deve retornar uma string', () => expect(typeof handlerElephants('location') === 'string').toBeTruthy());
  it('Passando location deve retornar nw', () => expect(handlerElephants('location')).toEqual('NW'));
  it('Passando popularity deve retornar um número', () => expect(typeof handlerElephants('popularity') === 'number').toBeTruthy());
  it('O número retornado deve ser igual ou maior a 5', () => expect(handlerElephants('popularity') >= 5).toBeTruthy());
  it('Passando availability deve retornar um array', () => expect(typeof handlerElephants('availability') === 'object').toBeTruthy());
  it('Availability não deve conter Monday', () => expect(handlerElephants('availability').includes('Monday')).toBeFalsy());
  it('Sem argumento deve retornar undefined', () => expect(handlerElephants()).toEqual(undefined));
  it('Passando objeto vazio, esperado string', () => expect(handlerElephants({})).toEqual(erro));
  it('Funcionalidade invalida retorna null', () => expect(handlerElephants('ramdom')).toEqual(null));
});
