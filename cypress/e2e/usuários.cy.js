import usuariosPage from '../support/pages/usuários'

describe('Tela de usuários', () => {

  context('Cenários de sucesso', () => {
    beforeEach(() => {
      cy.apiLogin()
    })
    
    it('Pesquisa de usuário', () => {
      usuariosPage.pesquisarUsuario()
    })
  })
})