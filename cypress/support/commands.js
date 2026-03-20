/** Login via the modal dialog */
Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-test="navbar.hamburgerButton"]').click();
  cy.contains('Přihlásit se').first().click();

  cy.get('[data-test="loginModal.signIn.form.emailInput"]').should('be.visible').type(email);

  cy.get('[data-test="loginModal.signIn.form.passwordInput"]').type(password);
  cy.get('[data-test="loginModal.signIn.form.button"]').click();

  // Wait for login modal to close after successful authentication
  cy.get('[data-test="loginModal.signIn.form.emailInput"]').should('not.exist');
});

/** Dismiss cookie consent if present */
Cypress.Commands.add('dismissOverlay', () => {
  cy.get('body').then(($body) => {
    if ($body.find('button:contains("Allow all")').length > 0) {
      cy.contains('button', 'Allow all').click();
    }
  });
});
