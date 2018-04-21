const fs = require('fs');
const { readConfig, saveConfig } = require('../../src/configurator');

describe('configurator', () => {
  beforeEach(() => {
    fs.writeFileSync('./.test1', 'asdfasdfasdfasdfasdfa');
    fs.writeFileSync('./.test2', JSON.stringify({ dingle: 'bop' }));
    fs.writeFileSync('./.test3', JSON.stringify({ reverse: true, dog: true }));
  });
  afterEach(() => {
    fs.unlinkSync('./.test1');
    fs.unlinkSync('./.test2');
    fs.unlinkSync('./.test3');
  });

  describe('readConfig(?path)', () => {
    it('always returns an object, never errors', () => {
      expect(readConfig('./.craznotatestlololol')).to.eql({});
      expect(readConfig('./.test1')).to.eql({});
      expect(readConfig('./.test2')).to.eql({ dingle: 'bop' });
      expect(readConfig('./.test3')).to.eql({ reverse: true, dog: true });
    });
  });

  describe('saveConfig(options, ?path)', () => {
    it('saves a file someplace special', () => {
      saveConfig({ reverse: true }, './.testy1');
      expect(fs.readFileSync('./.testy1', { encoding: 'utf8' })).to.eql('{"reverse":true}');
      fs.unlinkSync('./.testy1');
    });

    it('only writes the good configs', async () => {
      await saveConfig({ reverse: true, mypassword: 'hunter2' }, './.testy2');
      expect(fs.readFileSync('./.testy2', { encoding: 'utf8' })).to.eql('{"reverse":true}');
      fs.unlinkSync('./.testy2');
    });
  });
});
