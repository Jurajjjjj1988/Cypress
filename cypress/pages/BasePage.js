class BasePage {
  /** @returns {Cypress.Chainable} Navbar logo link */
  get logo() {
    return cy.get('[data-test="navbar.logoUlovDomov"]');
  }

  /** @returns {Cypress.Chainable} "Vložit inzerát" navigation link */
  get postAdLink() {
    return cy.get('[data-test="navbar.content.addOffer"]');
  }

  /** @returns {Cypress.Chainable} Hamburger menu button */
  get menuButton() {
    return cy.get('[data-test="navbar.hamburgerButton"]');
  }

  /** Navigate to path and dismiss overlays */
  visit(path) {
    cy.visit(path);
    this.dismissOverlay();
  }

  /** Dismiss cookie consent if present */
  dismissOverlay() {
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Allow all")').length > 0) {
        cy.contains('button', 'Allow all').click();
      }
    });
  }
}

module.exports = BasePage;
