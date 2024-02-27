import familiaPage from '../support/pages/cadastro-familia'

describe('Tela de famílias', () => {

  context('Cenários de sucesso', () => {
    beforeEach(() => {
      cy.apiLogin()
    })
    it('Cadastro de uma família em um abrigo', () => {
      familiaPage.cadastroFamilia()
    })
  })
})