describe('test greet()', function () {
    it('a name', function () {
      expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
    });
    it('null value', function () {
      expect(greet()).toEqual('Hello there!');
    });
    it('shouting', function () {
      expect(greet('JOSE')).toEqual('HELLO JOSE!');
    });
    it('array', function () {
      expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toEqual(
        'Hello, Alex, Arsene, Jose, Zidane'
      );
    });
  });