const expect = require('chai').expect;

describe('Arya Stark List app', () => {
  it('should load with the correct title', () => {
    browser.url('http://localhost:3000');
    const currentTitle = browser.getTitle();
    expect(currentTitle).to.eql('Arya Stark List');
  });
});
