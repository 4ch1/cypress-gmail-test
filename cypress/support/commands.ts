
const gmailAPI = Cypress.env('gmailAPI');
const bearerToken = Cypress.env('bearerToken');
// @ts-ignore
Cypress.Commands.add("getEmailId", () => {
    cy.request({
        method: "GET",
        url: `${gmailAPI}/messages`,
        headers: {
            authorization: `Bearer ${bearerToken}`,
        }
    })
})
