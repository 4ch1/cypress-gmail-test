/// <reference types="cypress" />


describe('Testing Emails', () => {
    const gmailAPI = Cypress.env('gmailAPI');
    const bearerToken = Cypress.env('bearerToken');
        it("Get user's email", () => {
            cy.request({
                method: "GET",
                url: `${gmailAPI}/messages`,
                headers: {
                    authorization: `Bearer ${bearerToken}`,
                }
            }).then(response=> {
                assert.isNotNull(response.body.messages[0].id, 'is not null')
            })
        })

    it("Read email", () => {
         // @ts-ignore
        cy.getEmailId().then((xhr) => {
             cy.request({
                 method: "GET",
                 url: `${gmailAPI}/messages/${xhr.body.messages[0].id}`,
                 headers: {
                     authorization: "Bearer ya29.A0ARrdaM_LW9AKyFBXNuAA_MND-dAFU11AXPGvdoc5YCc6KjniIcXacdID66L5uzJA5I-AKiqvNLD-Nc64Uw7Z9ZfncpiQq-3dVWuuTw8Usi7aDYKnQMh_SmCQPbp6KKTykxIpsvS1n9OR1PzDUR12dqz-02Nz1A",
                 }
             }).then(response => {
                 cy.log(JSON.stringify(response));
                 expect(response.body.labelIds).to.contain("UNREAD")
                 expect(response.body.snippet).to.contain("PIPER_TESTING")
             })
         })
    })


})
