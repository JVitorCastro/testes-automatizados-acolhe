class usuariosPage {

  pesquisarUsuario() {
    cy.visit('/dashboard')
    cy.contains('span', 'Usuários').click()
    cy.get('input[placeholder="Busque pelo nome do usuário"]').type('AUTOMATO - EQUIPE 12|3')
    cy.get('.mat-column-cpf')
      .should('have.length', 2)
      .find('span').should('have.text', ' 237.986.820-46 ')
    cy.get('.mat-column-name span').should('have.text', ' AUTOMATO - EQUIPE 12|3 ')
  }

}

export default new usuariosPage()