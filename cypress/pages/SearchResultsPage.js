const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
  /** @returns {Cypress.Chainable} Sort dropdown select element */
  get sortSelect() {
    return cy.get('select').first();
  }

  /** @returns {Cypress.Chainable} Result count text (e.g. "123 pronájmů") */
  get resultCount() {
    return cy.get('body').contains(/\d+\s+(pronájm|nejlevněj|prodej)/i);
  }

  /** @returns {Cypress.Chainable} All property listing card links */
  get listingCards() {
    return cy.get('h2').parents('a[href*="/inzerat/"]');
  }

  /** @returns {Cypress.Chainable} All listing price elements containing "Kč" */
  get listingPrices() {
    return cy.get('h3').filter(':contains("Kč")');
  }

  /** @returns {Cypress.Chainable} "Upravit hledání" button (mobile) */
  get editSearchButton() {
    return cy.contains('button', /upravit hledání/i);
  }

  /** @returns {Cypress.Chainable} Map container element */
  get mapContainer() {
    return cy.get('[class*="map"]').first();
  }

  /** @returns {Cypress.Chainable} Page heading (h1) */
  get pageHeading() {
    return cy.get('h1');
  }

  /** Open search results */
  open(path) {
    this.visit(path);
  }

  /** Sort by given option and wait for results to reload */
  sortBy(option) {
    this.sortSelect.select(option);
    this.dismissOverlay();
    this.listingCards.first().should('be.visible');
  }

  /** Extract prices as numbers */
  getPrices() {
    const prices = [];
    return this.listingPrices
      .each(($el) => {
        const text = $el.text();
        const num = parseInt(text.replace(/\s/g, '').replace(/Kč.*/, ''), 10);
        if (!isNaN(num)) prices.push(num);
      })
      .then(() => prices);
  }

  /** Extract listing addresses */
  getAddresses() {
    const addresses = [];
    return this.listingCards
      .each(($el) => {
        const addr = $el.find('p').first().text();
        if (addr) addresses.push(addr);
      })
      .then(() => addresses);
  }

  /** Click first listing card */
  clickFirstListing() {
    this.dismissOverlay();
    this.listingCards.first().scrollIntoView().click();
  }
}

module.exports = new SearchResultsPage();
