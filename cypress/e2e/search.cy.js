const HomePage = require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');

describe('Search', () => {
  it('displays relevant results when searching by location', () => {
    HomePage.open();
    HomePage.searchByLocation('Praha');
    HomePage.submitSearch();

    // URL contains location
    cy.url().should('match', /praha/i);

    // Results loaded with count
    SearchResultsPage.listingCards.should('have.length.greaterThan', 0);
    SearchResultsPage.resultCount.should('be.visible');

    // Addresses contain searched location
    SearchResultsPage.getAddresses().then((addresses) => {
      expect(addresses).to.have.length.greaterThan(0);
      addresses.forEach((addr) => {
        expect(addr.toLowerCase()).to.include('praha');
      });
    });

    // Page heading references location
    SearchResultsPage.pageHeading.invoke('text').should('match', /praha/i);
  });
});
