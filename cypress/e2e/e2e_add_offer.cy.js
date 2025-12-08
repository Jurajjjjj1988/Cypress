import AddOfferPage from '../pages/AddOfferPage';
import HomePage from '../pages/HomePage';
import { testStep, verifyUrl } from "../support/utilities";

describe('Add offer - E2E', () => {

  it('Guest can create rent house offer', () => {

    testStep('Visit start page');
    cy.visit('https://ud-fe.k8stage.ulovdomov.cz/vlozeni-inzeratu/formular/typ-inzerce');
    verifyUrl('/typ-inzerce');

    testStep('Login');
    cy.login('juraj.kapusansky@gmail.com', 'test123');

    testStep('Go to Add Offer wizard');
    HomePage.addOfferBtn().click();

    testStep('Fill contact info');
    AddOfferPage.firstName().type('Juraj');
    AddOfferPage.lastName().type('Kapusansky');
    AddOfferPage.setPhone('+421', '917863834');
    AddOfferPage.next().click();

    testStep('Address');
    AddOfferPage.setAddress('Brno', 'Bay');

    testStep('Price');
    AddOfferPage.fillPrice();
    AddOfferPage.next().click();

    testStep('Publish');
    cy.contains('Publikovať').click();

    verifyUrl('/detail');
  });
});
