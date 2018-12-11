import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email' : 'input[name = "email"]',
    'password' : 'input[name = "password"]',
    'selectGroup' : 'mat-select[name = "group"]',
    //'buttonLogin' : 'body > app-root > app-login > form > mat-card > mat-card-actions > button > span'
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail(value) {
    element(by.css(this.selectors['email'])).sendKeys(value);
  }

  setPassword(value) {
    element(by.css(this.selectors['password'])).sendKeys(value);
  }

  selectGroupOptionByValue() {
    element(by.css(this.selectors['selectGroup'])).click()
    .then(() => element.all(by.css('mat-option')).last().click());
  }

  logIn() {
      element(by.css(this.selectors['form'])).submit();
  }
}
