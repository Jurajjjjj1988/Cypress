export function testStep(name: string) {
    cy.log(`🔹 ${name}`);
  }
  
  export function solveRequests(method: string, alias: string, url: string) {
    cy.intercept(method, url).as(alias);
  }
  
  export function verifyUrl(partialUrl: string) {
    cy.url().should('include', partialUrl);
  }
  