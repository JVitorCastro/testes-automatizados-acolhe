import abrigosPage from '../support/pages/abrigos'

describe('Tela de abrigos', () => {

  context('Cenários de falha', () => {
    beforeEach(() => {
      cy.apiLogin()
    })
    it('Tentativa de cadastro de abrigo sem preencher um campo obrigatório', () => {
      abrigosPage.falhaCadastroAbrigo()
    })
  })
})