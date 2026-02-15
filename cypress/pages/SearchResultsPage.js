const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
  get sortSelect() {
    return cy.get('select').first();
  }

  get resultCount() {
    return cy.get('body').contains(/\d+\s+(pronájm|nejlevněj|prodej)/i);
  }

  get listingCards() {
    return cy.get('h2').parents('a[href*="/inzerat/"]');
  }

  get listingPrices() {
    return cy.get('h3').filter(':contains("Kč")');
  }

  get editSearchButton() {
    return cy.contains('button', /upravit hledání/i);
  }

  get mapContainer() {
    return cy.get('[class*="map"]').first();
  }

  get pageHeading() {
    return cy.get('h1');
  }

  /** Open search results */
  open(path) {
    this.visit(path);
  }

  /** Sort and wait for reload */
  sortBy(option) {
    this.sortSelect.select(option);
    cy.wait(500); // allow page to reload after sort
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
