class HomePage {
    hamburger() {
      return cy.get('[data-testid="hamburger"]');
    }
    loginBtn() {
      return cy.contains('Prihlásiť');
    }
    addOfferBtn() {
      return cy.contains('Vložiť inzerát');
    }
  }
  
  export default new HomePage();
  