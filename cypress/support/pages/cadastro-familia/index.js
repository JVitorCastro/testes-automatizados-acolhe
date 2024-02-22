class CadastroFamiliaPage {

  cadastroFamilia() {
    cy.visit('/dashboard')
    cy.contains('span', 'Abrigos').click()
    cy.get('input[placeholder="Buscar Abrigo"]').type('AUTOMATO - EQUIPE 12|3')
    cy.get('.mat-mdc-row').should('have.length', 1)
    cy.contains('.shelter-name-inline__name', 'AUTOMATO - EQUIPE 12|3').click()
    cy.get('.page-title__title').should('have.text', ' AUTOMATO - EQUIPE 12|3')
    cy.contains('.mat-mdc-tab-list div', 'Acolhidos').click()
    cy.contains('.mdc-button__label', 'Família').click()
    cy.get('input[placeholder="Buscar pelo CPF ou NIS"]').type('237.986.820-46')
    cy.contains('button', 'Buscar').click()
    cy.contains('span', 'Reativar').click()
    cy.contains('.mdc-button__label span', 'Cadastrar').click()
    cy.contains('.mat-mdc-snack-bar-label', ' Família reativada.')
  }
}

export default new CadastroFamiliaPage()