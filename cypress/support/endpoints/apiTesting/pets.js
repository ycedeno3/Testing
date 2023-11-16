import { constants } from "../../utilities/defaultVariables";

export const listsPets = () => {
    it("Lists Pets Status 'Available'", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env("apiTesting").urlBase}/pet/findByStatus`,
            qs: { status: "available" },
            headers: {
                "Accept": "application/json",
            },
        }).then((response) => {
            expect(response).property("status").to.equal(200);
            cy.log(JSON.stringify(response.body));
        });
    })
}

export const findPetByID = () => {
    it("Find Pet by ID", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env("apiTesting").urlBase}/pet/${constants.petId}`,
        }).then((response) => {
            expect(response).property("status").to.equal(200);
            cy.log(JSON.stringify(response.body));
        });
    })
}