class abrigosPage {

  falhaCadastroAbrigo() {
    cy.visit('/dashboard')
    cy.contains('span', 'Abrigos').click()
    cy.get('.mdc-button__label span').click()
    cy.get('#name').type('AUTOMATO')
    cy.get('mat-select[id="type"]').click()
    cy.contains('mat-option span', 'Casa').click()
    cy.get('#zipCode').type('50721770')
    cy.get('#number').type('100')
    cy.get('#phone').type('99999999999')
    cy.get('#email').type('teste@gmail.com')
    cy.get('mat-select[id="owner"]').click()
    cy.get('input[placeholder="Busque pelo nome do usuário"]').type('Mateus')
    cy.get('mat-option.mat-mdc-option').eq(1).click()
    cy.contains('button', 'Cadastrar').should('be.disabled')

  }
}

export default new abrigosPage()