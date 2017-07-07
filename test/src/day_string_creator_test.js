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
  '### 30-09-2017 - SATURDAY\n- '
];

describe('dayString(date, month)', () => {
  it('returns a list of day strings for a given month/date', () => {
    const septemberDays = dayStringer(new Date('2017-09'), 8);
    const februaryDays = dayStringer(new Date('2019-02'), 1);
    expect(februaryDays.length).to.eql(28);
    expect(septemberDays).to.eql(monthOfSeptember);
  });

  it('handles leap years', () => {
    const leapFeb = dayStringer(new Date('2020-02'), 1);
    expect(leapFeb.length).to.eql(29);
  });
});
