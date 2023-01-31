/// <reference types="cypress" />
import { PRACTICE_DATA } from '../../utils/constant';
import { clearCypressConsole } from '../../utils/functions';
import { commandMethods } from '../../common/commonMethods';

Cypress.on('uncaught:exception', () => {
  return false;
});
clearCypressConsole();

describe('Practice Automation Test NAV -- Home Page', () => {
  const { arrivalSelector, checkUrlParams } = PRACTICE_DATA;

  beforeEach(() => {
    cy.visit('/');
  });

  it('2. Home page with three Arrivals only', () => {
    commandMethods.assertPagesHasOnly3Arivals();
  });

  it.only('3. Home page - Images in Arrivals should navigate', () => {
    commandMethods.assertPagesHasOnly3Arivals();
    // Assert that when clicking on the arrivals button
    // It goes to next page
    checkUrlParams.forEach((urlParam, i) => {
      if (i <= 1) {
        commandMethods.selectButtonAndClickOnIt('.button', i);
        commandMethods.assertUrlHasCorretParams(urlParam);
        cy.go('back');
      } else {
        commandMethods
          .selectButtonAndClickOnIt('.button', i)
          .should('not.have.text', 'Read more');
        cy.get('.cartcontents').should('include.text', '1 item');
      }
    });

    cy.visit('/');
    // Assert that when clicking on the arrivals img
    // It goes to next page
    checkUrlParams.forEach((urlParam, i) => {
      commandMethods.customeFindElementAndClickOnIt(arrivalSelector, i);
      commandMethods.assertUrlHasCorretParams(urlParam);
      if (i <= 1) {
        cy.go('back');
      }
    });
  });
});
