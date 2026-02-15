const SearchResultsPage = require('../pages/SearchResultsPage');

describe('Sorting', () => {
  beforeEach(() => {
    SearchResultsPage.open('/pronajem/byty/praha');
  });

  it('sorts results by cheapest price in ascending order', () => {
    SearchResultsPage.listingCards.should('have.length.greaterThan', 0);

    SearchResultsPage.sortBy('Nejlevnější');

    SearchResultsPage.getPrices().then((prices) => {
      expect(prices).to.have.length.greaterThan(1);

      for (let i = 1; i < prices.length; i++) {
        expect(prices[i], `price[${i}] >= price[${i - 1}]`).to.be.at.least(prices[i - 1]);
      }
    });

    SearchResultsPage.resultCount.should('be.visible');
  });
});
