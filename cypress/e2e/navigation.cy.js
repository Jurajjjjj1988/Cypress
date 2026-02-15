const HomePage = require('../pages/HomePage');

describe('Navigation', () => {
  it('navigates to post ad page and back via logo', () => {
    HomePage.open();

    // Click post ad
    HomePage.postAdLink.click();
    cy.url().should('include', 'vlozeni-inzeratu');

    // Back via logo
    HomePage.dismissOverlay();
    HomePage.logo.click();
    HomePage.heroHeading.should('be.visible');
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
  });
});
