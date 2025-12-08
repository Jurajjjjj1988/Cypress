class AddOfferPage {
    firstName() { return cy.get('[name="firstname"]'); }
    lastName() { return cy.get('[name="lastname"]'); }
    next() { return cy.contains('Pokračovať'); }
  
    setPhone(country, number) {
      cy.get('[data-testid="phone-prefix"]').click();
      cy.contains(country).click({ force: true });
      cy.get('[name="phone"]').type(number);
    }
  
    setAddress(city, street) {
      cy.get('[name="city"]').type(`${city}{enter}`);
      cy.intercept('GET', '**/address*').as('streetReq');
      cy.get('[name="street"]').type(street);
      cy.wait('@streetReq');
      cy.get('.chakra-stack p').first().click();
    }
  
    fillPrice() {
      cy.get('[name="price"]').clear().type('15000');
      cy.get('[name="deposit"]').clear().type('13000');
      cy.get('[name="fees"]').clear().type('5000');
    }
  }
  
  export default new AddOfferPage();
  