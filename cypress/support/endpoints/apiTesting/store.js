import { onlyIdPets, userName, orderPetId, merchant } from "../../utilities/defaultVariables";

export const createPurchaseOrder = () => {
    it("create purchase order", () => {
        const body = {
            id: onlyIdPets,
            petId: orderPetId,
            quantity: 1,
            shipDate: merchant,
            status: "placed",
            complete: true,
        };
        cy.request({
            method: "POST",
            url: `${Cypress.env("apiTesting").urlBase}/store/order`,
            body,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }).then((response) => {
            expect(response).property("status").to.equal(200);
            cy.log(JSON.stringify(response.body));
            expect(response).property("body").property("id").to.exist;
            expect(response).property("body").property("petId").to.exist;
            expect(response).property("body").property("quantity").to.exist;
            expect(response).property("body").property("shipDate").to.exist;
            expect(response).property("body").property("status").to.exist;
            expect(response).property("body").property("complete").to.exist;
            cy.log("id", body.id);
            cy.log("petId", body.petId);
        });
    });
}