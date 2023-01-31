import { PRACTICE_DATA } from '../utils/constant';

// Deconstruct Object
const {
  homePageNav: { selector: homepageNavSelector, text: homePageNavText },
  shopPageNav: { selector: shopPageNavSelector, text: shopPageNavText },
  arrivalSelector,
} = PRACTICE_DATA;

export class CommonMethods {
  clickOnWebElement(webElement, text) {
    cy.get(webElement).contains(text).click();
  }
  customeFindElementAndClickOnIt(webElement, number) {
    cy.get(webElement).eq(number).first().click();
  }
  selectButtonAndClickOnIt(webElement, number) {
    return cy.get(webElement).eq(number).click();
  }

  assertUrlHasCorretParams(pramName) {
    cy.location().then((loc) => {
      expect(loc.pathname).to.be.equal(pramName);
    });
  }

  assertPagesHasOnly3Arivals() {
    this.clickOnWebElement(homepageNavSelector, homePageNavText);
    this.clickOnWebElement(shopPageNavSelector, shopPageNavText);
    cy.get(arrivalSelector).first().scrollIntoView();
    return cy.get(arrivalSelector).should('have.length', 3);
  }
}

export const commandMethods = new CommonMethods();
