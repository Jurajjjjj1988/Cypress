const HomePage = require('../pages/HomePage');

describe('Homepage', () => {
  beforeEach(() => {
    HomePage.open();
  });

  it('displays all key sections on load', () => {
    // Hero section
    HomePage.heroHeading.should('be.visible').and('contain.text', 'Nový domov');

    // Search form is complete
    HomePage.searchTypeLabel.should('be.visible');
    HomePage.propertyTypeLabel.should('be.visible');
    HomePage.locationInput.should('be.visible');
    HomePage.searchButton.should('be.visible');

    // Listing sections with show-more links
    HomePage.listingCards.should('have.length.greaterThan', 0);
    HomePage.showMoreRentals.should('be.visible');
    HomePage.showMoreSales.should('be.visible');

    // Header navigation
    HomePage.logo.should('be.visible');
    HomePage.postAdLink.should('be.visible');
  });
});
