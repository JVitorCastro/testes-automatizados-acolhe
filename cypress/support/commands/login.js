Cypress.Commands.add('apiLogin', () => {
  cy.request({
    method: 'POST',
    url: "https://acolhebe-disciplina.innovagovlab.org/api/v1/auth/login",
    body: {
      "username": "mateusmwar@gmail.com",
      "password": "idzq%f"
    }
  }).then(function (response) {
    expect(response.status).to.eq(200)
    const token = response.body
    window.localStorage.setItem('accessToken', token)
  })
})