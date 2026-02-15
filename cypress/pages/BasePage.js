class BasePage {
  get logo() {
    return cy.get('[data-test="navbar.logoUlovDomov"]');
  }

  get postAdLink() {
    return cy.get('[data-test="navbar.content.addOffer"]');
  }

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
