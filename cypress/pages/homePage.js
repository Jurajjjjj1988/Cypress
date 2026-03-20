const BasePage = require('./BasePage');

class HomePage extends BasePage {
  /** @returns {Cypress.Chainable} Main hero heading (h1) */
  get heroHeading() {
    return cy.get('h1');
  }

  /** @returns {Cypress.Chainable} Location search input field */
  get locationInput() {
    return cy.get('input[placeholder="Město, ulice..."]');
  }

  /** @returns {Cypress.Chainable} Search submit button */
  get searchButton() {
    return cy.get('[data-test="global.writeBox"] a').last();
  }

  /** @returns {Cypress.Chainable} "Co hledáte?" search type label */
  get searchTypeLabel() {
    return cy.contains('Co hledáte?');
  }

  /** @returns {Cypress.Chainable} "Jakou nemovitost?" property type label */
  get propertyTypeLabel() {
    return cy.contains('Jakou nemovitost?');
  }

  /** @returns {Cypress.Chainable} All property listing card links */
  get listingCards() {
    return cy.get('a[href*="/inzerat/"]');
  }

  /** @returns {Cypress.Chainable} "Zobrazit další pronájmy" link */
  get showMoreRentals() {
    return cy.contains('a', /zobrazit další pronájmy/i);
  }

  /** @returns {Cypress.Chainable} "Zobrazit další prodeje" link */
  get showMoreSales() {
    return cy.contains('a', /zobrazit další prodeje/i);
  }

  /** Open homepage */
  open() {
    this.visit('/');
  }

  /** Type location and select from autocomplete */
  searchByLocation(location) {
    this.locationInput.click();
    this.locationInput.type(location, { delay: 100 });
    cy.contains('.chakra-portal, [role="dialog"]', location)
      .should('be.visible')
      .contains(location)
      .first()
      .click();
  }

  /** Submit search and wait for navigation */
  submitSearch() {
    this.searchButton.click();
    cy.url().should('not.eq', Cypress.config('baseUrl') + '/');
  }
}

module.exports = new HomePage();
