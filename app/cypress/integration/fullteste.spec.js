describe("Testes gerais", () => {
    it('pesquisa um item', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.sc-caiLqq').click().type('onix').type('{enter}');
        cy.get('.sc-hKwDye').contains('onix').should('be.visible');
        cy.get('.sc-caiLqq').clear();
        cy.get(':nth-child(1) > .sc-hKwDye > .sc-eCImPb').contains('bulbasaur').should('be.visible');
    });

    it('Abre e fecha formulario de criação de um novo card', () => {
        cy.get('.sc-jObWnj').click();
        cy.get('.sc-kfPuZi').should('be.visible');
        cy.get('.sc-dlVxhl').click();
        cy.get(':nth-child(1) > .sc-hKwDye > .sc-eCImPb').contains('bulbasaur').should('be.visible');
    });

    it('Abre e fecha o card de deletar', () => {
        cy.get(':nth-child(1) > .sc-jRQBWg > #deleteButton').click();
        cy.get('.sc-crHmcD').should('be.visible');
        cy.get('.sc-ieecCq').click();
        cy.get(':nth-child(1) > .sc-hKwDye > .sc-eCImPb').contains('bulbasaur').should('be.visible');
    });

})