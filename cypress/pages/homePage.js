const BasePage = require('./BasePage');

class HomePage extends BasePage {
  get heroHeading() {
    return cy.get('h1');
  }

  get locationInput() {
    return cy.get('input[placeholder="Město, ulice..."]');
  }

  get searchButton() {
    return cy.get('[data-test="global.writeBox"] a').last();
  }

  get searchTypeLabel() {
    return cy.contains('Co hledáte?');
  }

  get propertyTypeLabel() {
    return cy.contains('Jakou nemovitost?');
  }

  get listingCards() {
    return cy.get('a[href*="/inzerat/"]');
  }

  get showMoreRentals() {
    return cy.contains('a', /zobrazit další pronájmy/i);
  }

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
