const parseDateString = require('../../src/date_parser');

describe('parseDateString(?date)', () => {
  it('returns a date when given any valid date string', () => {
    const date = parseDateString('2017-03-22');
    expect(date).to.be.instanceOf(Date);
    expect(date.getMonth()).to.eql(2);
    expect(date.getFullYear()).to.eql(2017);
  });

  it('returns current month/year when given nothing', () => {
    const date = parseDateString(undefined);
    const today = new Date();
    expect(date).to.be.instanceOf(Date);
    expect(date.getMonth()).to.eql(today.getMonth());
    expect(date.getFullYear()).to.eql(today.getFullYear());
  });

  it('errors when given a garbage date', () => {
    try {
      parseDateString('Four score and seven doggos ago');
      throw new Error('It should error for suresies');
    } catch (error) {
      expect(error.message).to.contain('Invalid date string!');
    }
  });
});
