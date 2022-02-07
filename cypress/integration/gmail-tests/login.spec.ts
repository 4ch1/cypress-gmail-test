/// <reference types="cypress" />


describe('Testing Gmail Pages', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    context('Login', () => {
        it('Login with valid credentials', () => {
            cy.intercept("POST", "**/lookup/accountlookup?**").as("login")
            cy.intercept("POST", "**/signin/challenge?**").as("signIn")
            cy.visit('/');
            cy.get("[id=identifierId]").type(username)
                .get('#identifierNext button').click();
            cy.wait("@login");
            cy.get("[name=password]").type(password)
                .get('#passwordNext button').click();
            cy.wait("@signIn");
        })
    })

})
