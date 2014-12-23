var path = require('path')
  , find = require('../index');

describe('find', function() {

  it('should find files', function() {
    var found = find('spec/fixtures', 'test.js');

    found.should.not.equal(null);
    found.should.equal(path.join('spec', 'fixtures', 'test.js'));
  });

  it('should ignore excluded directories passed as an array', function() {
    var found = find('spec/fixtures', 'nested.js', ['ignored']);

    found.should.not.equal(null);
    found.should.equal(path.join('spec', 'fixtures', 'nested', 'nested.js'));
  });

  it('should ignore excluded directories passed as a string', function() {
    var found = find('spec/fixtures', 'nested.js', 'nested');

    found.should.not.equal(null);
    found.should.equal(path.join('spec', 'fixtures', 'ignored', 'nested.js'));
  });

  it('should find files in an array', function() {
    var found = find('spec/fixtures', ['invalid', 'test.js']);

    found.should.not.equal(null);
    found.should.equal(path.join('spec', 'fixtures', 'test.js'));
  });
});
