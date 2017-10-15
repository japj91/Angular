import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('myapp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Get more practice working with elements in page', () => {
    page.navigateTo();
    // Ensure element with id='fname' has text equalling Jane.
    expect(element(by.id('fname')).getText()).toEqual('Jane');
    expect(element(by.id("lname")).getText()).toEqual("Johal");

    // Get input element and enter the text 'Boston'.
    var cityInput = element(by.id('cityInput'));
    cityInput.sendKeys('Boston');

    // Get the button and click it.
    var msgButton = element(by.id('showMsgButton'));
    msgButton.click();

    // Test the message that is output after the button is clicked.
    var messageOutput = element(by.id('messageLabel'));
    expect(messageOutput.getText()).toEqual('It is always sunny in Boston');
  })

});
