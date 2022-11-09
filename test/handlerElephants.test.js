const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Passando count como parametron deve retornar 4', () => expect(handlerElephants('count')).toEqual(4));
  it('Passando names como parametron deve retornar Jefferson', () => expect(handlerElephants('names').includes('Jefferson')).toBeTruthy());
  it('Passando averageAge como parametron deve retornar 10.5', () => expect(handlerElephants('averageAge')).toEqual(10.5));
});
