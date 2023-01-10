import { enteredInputValue, checksFound } from '../utils/constant.js';
Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Testing Challenge 1', () => {
  beforeEach(() => {
    cy.visit('http://testingchallenges.thetestingmap.org/index.php');
  });

  it('Empty string', () => {
    enteredInputValue.forEach((el, i) => {
      if (el === '') {
        cy.get('#firstname').clear();
        cy.get('.button').click();
        cy.get('.twelve.columns')
          .find('li')
          .should('have.length', i + 1)
          .and('include.text', checksFound[0]);
        cy.get('.values-tested');
      } else {
        cy.get('#firstname').type(el);
        cy.get('.button').click();
        cy.get('.twelve.columns')
          .find('li')
          .should('have.length', i + 1)
          .and('include.text', checksFound[i]);
        cy.get('.values-tested').should('include.text', i + 1);
      }
    });
  });
});
