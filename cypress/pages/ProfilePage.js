const BasePage = require('./BasePage');

class ProfilePage extends BasePage {
  /** @returns {Cypress.Chainable} First name input field */
  get firstNameInput() {
    return cy.get('[data-test="profil.edit.nameInput"]');
  }

  /** @returns {Cypress.Chainable} Last name input field */
  get lastNameInput() {
    return cy.get('[data-test="profil.edit.lastNameInput"]');
  }

  /** @returns {Cypress.Chainable} Occupation input field */
  get occupationInput() {
    return cy.get('[data-test="profil.edit.ocupation"]');
  }

  /** @returns {Cypress.Chainable} Year of birth input field */
  get yearOfBirthInput() {
    return cy.get('[data-test="profil.edit.yearOfBirth"]');
  }

  /** @returns {Cypress.Chainable} "About me" textarea */
  get aboutMeTextarea() {
    return cy.get('[data-test="global.textarea"]');
  }

  /** @returns {Cypress.Chainable} "Uložit" save button */
  get saveButton() {
    return cy.contains('button', /uložit/i);
  }

  /** @returns {Cypress.Chainable} "Moje vizitka" page heading */
  get pageHeading() {
    return cy.contains('h1, h2', /moje vizitka/i);
  }

  /** Open profile edit page */
  open() {
    this.visit('/nastaveni/moje-vizitka');
  }

  /** Fill personal data fields */
  fillPersonalData({ firstName, lastName, occupation, yearOfBirth, aboutMe }) {
    if (firstName !== undefined) this.firstNameInput.clear().type(firstName);
    if (lastName !== undefined) this.lastNameInput.clear().type(lastName);
    if (occupation !== undefined) this.occupationInput.clear().type(occupation);
    if (yearOfBirth !== undefined) this.yearOfBirthInput.clear().type(yearOfBirth);
    if (aboutMe !== undefined) this.aboutMeTextarea.clear().type(aboutMe);
  }

  /** Save profile */
  save() {
    this.dismissOverlay();
    this.saveButton.scrollIntoView().click();
  }

  /** Get current field values */
  getFieldValue(selector) {
    return selector.invoke('val');
  }
}

module.exports = new ProfilePage();
