describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com')
    cy.get('w-100 btn btn-lg btn-warning').click()
  })
})