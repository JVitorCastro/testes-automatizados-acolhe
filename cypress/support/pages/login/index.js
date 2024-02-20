class LoginPage {
  submit(email, password) {
    cy.visit('/')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.contains('button', 'Entrar').click()
  }
  
  shouldBeloggedIn(name) {
    cy.contains('.fuse-vertical-navigation-content-header', name)
  }

  errorShouldBe() {
    cy.get('.fuse-alert-content')
    .should('be.visible')
    .find('.fuse-alert-message ').should('have.text', ' E-mail ou senha inválidos ')
  }

  errorInvalidEmail(){
    cy.get('.mat-mdc-form-field-error-wrapper')
      .should('be.visible')
      .and('have.text', ' E-mail inválido ')
  }
}

export default new LoginPage()