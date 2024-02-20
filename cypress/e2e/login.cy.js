import dataLogin from '../fixtures/users-login.json'
import login from '../support/pages/login'

describe('Login', () => {
  it('Login com sucesso', () => {
    const user = dataLogin.success

    login.submit(user.email, user.password)
    login.shouldBeloggedIn(user.name)
  })
  
  it('Tentativa de login com senha incorreta', () => {
    const user = dataLogin.invpass

    login.submit(user.email, user.password)
    login.errorShouldBe()
  })

  it('Tentativa de login com email inválido', () => {
    const user = dataLogin.email404

    login.submit(user.email, user.password)
    login.errorInvalidEmail()
  })

  it('Tentativa de login com email incorreto', () => {
    const user = dataLogin.incorrectEmail

    login.submit(user.email, user.password)
    login.errorShouldBe()
  })
})