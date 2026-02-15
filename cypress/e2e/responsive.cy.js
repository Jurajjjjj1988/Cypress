const SearchResultsPage = require('../pages/SearchResultsPage');

describe('Responsive — Mobile', () => {
  beforeEach(() => {
    cy.viewport(375, 667);
  });

  it('adapts layout for mobile viewport', () => {
    // Homepage search form works on mobile
    cy.visit('/');
    cy.dismissOverlay();
    cy.get('h1').should('be.visible');
    cy.get('input[placeholder="Město, ulice..."]').should('be.visible');

    // Search results on mobile
    SearchResultsPage.open('/pronajem/byty/praha');
    SearchResultsPage.listingCards.should('have.length.greaterThan', 0);

    // Map hidden on mobile
    SearchResultsPage.mapContainer.should('not.be.visible');

    // Mobile-specific edit search button
    SearchResultsPage.editSearchButton.should('be.visible');
  });
});
