/// <reference types="cypress" />


describe('Testing Gmail Pages', () => {

  context('Sign Up', () => {
    const password = Cypress.env('password');
    it('Create New Account ', () => {
      cy.intercept("POST", "**/log?format**").as("playSignUp")
      cy.intercept("POST", "**/signup/accountdetails?**").as("signUp")
      cy.visit('http://www.gmail.com');
      cy.get("[jsname=V67aGc]").eq(1).click();
      cy.wait("@playSignUp");
      cy.get("[id=firstName]").type("John");
      cy.get("[id=lastName]").type("Walker");
      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()
      const testname = `testCypress.${id}`
      cy.get("[id=username]").type(testname);
      cy.log(testname);
      cy.get("[name=Passwd]").type(password);
      cy.get("[id=confirm-passwd]").type(password);
      cy.get('#accountDetailsNext button').click();
      cy.wait("@signUp");
    })
  });

})
