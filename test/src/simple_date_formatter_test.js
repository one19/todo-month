const formatDateString = require('../../src/simple_date_formatter');

describe('formatDateString(labelString, ?date)', () => {
  it('formats things that never look like dates', () => {
    const label = formatDateString('#todo/monthly', new Date());
    expect(label).to.eql('#todo/monthly');
  });

  it('still tries when no date is given', () => {
    const label = formatDateString('#todo/--yyyy');
    const thisYear = new Date().getFullYear();
    expect(label).to.eql(`#todo/${thisYear}`);
  });

  it('will put the month into words in your label', () => {
    const label = formatDateString('#todo/--mmmm', new Date(2017, 0, 1));
    expect(label).to.eql('#todo/January');
  });

  it('understands things like spaces too', () => {
    const label = formatDateString('# Getting stuf done! --mmmm', new Date(2017, 0, 1));
    expect(label).to.eql('# Getting stuf done! January');
  });

  it('understands complex dates', () => {
    const label = formatDateString('# Getting stuf done! --mmmm-yy-ddd', new Date(2017, 0, 1));
    expect(label).to.eql('# Getting stuf done! January-17-Sun');
  });

  it('works given the strings in the readme', () => {
    const label = formatDateString('#todo/nightly---yy', new Date(2017, 0, 1));
    expect(label).to.eql('#todo/nightly-17');
    const title = formatDateString('# --mmmm-yy tasks:', new Date(2017, 0, 1));
    expect(title).to.eql('# January-17 tasks:');
  });
});
