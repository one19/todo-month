const dayStringer = require('../../src/day_string_creator');

const monthOfSeptember = [
  '### 01-09-2017 - Fr\n- ',
  '### 02-09-2017 - SATURDAY\n- ',
  '### 03-09-2017 - SUNDAY\n- ',
  '### 04-09-2017 - Mo\n- ',
  '### 05-09-2017 - Tu\n- ',
  '### 06-09-2017 - We\n- ',
  '### 07-09-2017 - Th\n- ',
  '### 08-09-2017 - Fr\n- ',
  '### 09-09-2017 - SATURDAY\n- ',
  '### 10-09-2017 - SUNDAY\n- ',
  '### 11-09-2017 - Mo\n- ',
  '### 12-09-2017 - Tu\n- ',
  '### 13-09-2017 - We\n- ',
  '### 14-09-2017 - Th\n- ',
  '### 15-09-2017 - Fr\n- ',
  '### 16-09-2017 - SATURDAY\n- ',
  '### 17-09-2017 - SUNDAY\n- ',
  '### 18-09-2017 - Mo\n- ',
  '### 19-09-2017 - Tu\n- ',
  '### 20-09-2017 - We\n- ',
  '### 21-09-2017 - Th\n- ',
  '### 22-09-2017 - Fr\n- ',
  '### 23-09-2017 - SATURDAY\n- ',
  '### 24-09-2017 - SUNDAY\n- ',
  '### 25-09-2017 - Mo\n- ',
  '### 26-09-2017 - Tu\n- ',
  '### 27-09-2017 - We\n- ',
  '### 28-09-2017 - Th\n- ',
  '### 29-09-2017 - Fr\n- ',
  '### 30-09-2017 - SATURDAY\n- ',
];

describe('dayString(date, month)', () => {
  it('returns a list of day strings for a given month/date', () => {
    const septemberDays = dayStringer(2017, 8);
    const februaryDays = dayStringer(2019, 1);
    expect(februaryDays.length).to.eql(28);
    expect(septemberDays).to.eql(monthOfSeptember);
  });

  it('lets you invert the ordering by passing -r or --reverse', () => {
    const septemberDays = dayStringer(2017, 8, { reverse: true });
    expect(septemberDays.reverse()).to.eql(monthOfSeptember);
  });

  it('lets you change checkboxes into git-compatible markdown -c or --compat', () => {
    const septemberDays = dayStringer(2017, 8, { compat: true });
    expect(septemberDays.map(e => e.replace(/\n- \[ ] /g, '\n- '))).to.eql(monthOfSeptember);
  });

  it('handles leap years', () => {
    const leapFeb = dayStringer(2020, 1);
    expect(leapFeb.length).to.eql(29);
  });

  it('allows you to output only the weekdays', () => {
    const septemberDays = dayStringer(2017, 8, { weekdays: true });
    expect(septemberDays).to.eql(monthOfSeptember.filter(e => !e.match(/SATU|SUND/)));
  });

  describe('with dogs', () => {
    it('is capable of being silly with dogs', () => {
      const dogDays = dayStringer(2017, 8, { dog: true });
      expect(dogDays[0]).to.eql('### 01-09-2017 🐶 Fr\n- ');
    });

    it('seriously, is capable of being silly with dogs', () => {
      const dogDays = dayStringer(2017, 8, { moarDog: true });
      expect(dogDays[0]).to.eql('### 01🐶09🐶2017 - Fr\n- ');
    });

    it('gets totally inundated with doggos', () => {
      const dogDays = dayStringer(2017, 8, { dog: true, moarDog: true });
      expect(dogDays[0]).to.eql('### 01🐶09🐶2017 🐶 Fr\n- ');
    });
  });

  describe('when given dateformat string', () => {
    it('normalises all days around a given date format string', () => {
      const septemberDays = dayStringer(2017, 8, { format: 'dd-mm-yyyy - dddd' });
      expect(septemberDays[0]).to.eql('### 01-09-2017 - Friday\n- ');
    });

    it('smartly tries to downcase date format strings', () => {
      const septemberDays = dayStringer(2017, 8, { format: 'DD-MM-YYYY - DDDD' });
      expect(septemberDays[0]).to.eql('### 01-09-2017 - Friday\n- ');
    });

    it('can handle some really nutty formats', () => {
      const septemberDays = dayStringer(2017, 8, { format: 'dd-mm,mmm,yyyy - ddd - dddd' });
      expect(septemberDays[0]).to.eql('### 01-09,Sep,2017 - Fri - Friday\n- ');
    });

    it('handles standard named formats', () => {
      const septemberDays = dayStringer(2017, 8, { format: 'mediumDate' });
      expect(septemberDays[0]).to.eql('### Sep 1, 2017\n- ');
    });

    it('respects our dog wishes', () => {
      const septemberDays = dayStringer(2017, 8, { format: 'isoDate', moarDog: true });
      expect(septemberDays[0]).to.eql('### 2017🐶09🐶01\n- ');
    });
  });
});
