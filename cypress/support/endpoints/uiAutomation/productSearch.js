export const productSearch = () => {
    it("product search in 'Your Store", () => {
        cy.visit(Cypress.env("uiAutomation").urlHomePage);
        cy.get('h1 > a').should('to.exist');
        cy.screenshot('homePage/homePage', { overwrite: true });
        cy.get('[name="search"]').should('to.exist').type("Iphone");
        cy.get('.input-group-btn > .btn').should('to.be.visible').click();
        cy.get('#content > h1').should('to.be.visible');
        cy.get('.img-responsive').should('to.exist').click().wait(500);
        cy.get('#button-cart').should('to.exist').click();
        cy.get('.alert').should('contain', 'Success: You have added ').wait(500);
        cy.screenshot('itemSelect/addPhoneToCart', { overwrite: true });
        cy.get('#cart > .btn').should('contain', ' 1 item(s) - $123.20');
        cy.get('.btn-inverse').should('to.exist').click();
        cy.get('[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"] > strong').should('to.be.visible').click();
        cy.get('.table-responsive > .table > tbody > tr > .text-center > a > .img-thumbnail').should('to.exist');
        cy.screenshot('shoppingCart/addPhoneToShoppingCart', { overwrite: true });
        cy.get('.input-group-btn > .btn-danger > .fa').should('to.be.visible').click();
        cy.get('#cart > .btn').should('contain', '0 item(s) - $0.00');
        cy.get('.table-responsive > .table > tbody > tr > .text-center > a > .img-thumbnail').should('not.to.exist');
        cy.screenshot('shoppingCart/shoppingCartEmpty', { overwrite: true });
    })
}