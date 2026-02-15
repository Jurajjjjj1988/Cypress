const ProfilePage = require('../pages/ProfilePage');

describe('Profile', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.dismissOverlay();
    cy.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
  });

  it('updates personal data and persists changes after reload', () => {
    ProfilePage.open();
    ProfilePage.pageHeading.should('be.visible');

    // Verify fields are accessible
    ProfilePage.firstNameInput.should('be.visible').and('not.have.value', '');

    // Fill test data
    cy.fixture('testData').then((data) => {
      ProfilePage.fillPersonalData(data.profile);
      ProfilePage.save();

      // Reload and verify persistence
      ProfilePage.open();
      ProfilePage.firstNameInput.should('have.value', data.profile.firstName);
      ProfilePage.lastNameInput.should('have.value', data.profile.lastName);
      ProfilePage.occupationInput.should('have.value', data.profile.occupation);
      ProfilePage.yearOfBirthInput.should('have.value', data.profile.yearOfBirth);
      ProfilePage.aboutMeTextarea.should('have.value', data.profile.aboutMe);
    });
  });
});
