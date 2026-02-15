describe('Login', () => {
  it('logs in successfully with valid credentials', () => {
    cy.visit('/');
    cy.dismissOverlay();

    cy.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));

    // Verify logged in — menu should show profile link
    cy.get('[data-test="navbar.hamburgerButton"]').click();
    cy.contains('a', /profil|nastaveni/i).should('be.visible');
  });
});
