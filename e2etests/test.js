const expect = require('chai').expect;

describe('Arya Stark List app', () => {

  it('should load with the correct title', () => {
    browser.url('http://localhost:3000');
    const currentTitle = browser.getTitle();
    expect(currentTitle).to.eql('Arya Stark List');
  });

  it('should allow Arya to add a name', () => {
    const cersei = 'Cersei Lannister';
    browser.url('http://localhost:3000');
    browser.element('.name-input').setValue(cersei);
    browser.click('.name-submit');
    const currentName = browser.element('.name-text').getText();
    expect(currentName).to.eql(cersei);
  });

  it('should allow Arya to delete a name', () => {
    const cersei = 'Cersei Lannister';
    browser.url('http://localhost:3000');
    browser.element('.name-input').setValue(cersei);
    browser.click('.name-submit');
    browser.click('.name-delete');
    const currentName = browser.element('.name-text');
    expect(currentName.state).to.eql('failure');
  });

});
