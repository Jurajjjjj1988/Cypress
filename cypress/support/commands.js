Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-testid="hamburger"]').click();
    cy.contains('Prihlásiť').click();
    cy.get('[name="email"]').type(email);
    cy.contains('Pokračovať').click();
    cy.get('[name="password"]').type(password);
    cy.contains('Prihlásiť').click();
  });
  