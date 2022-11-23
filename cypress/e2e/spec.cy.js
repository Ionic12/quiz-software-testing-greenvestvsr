describe('register', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/register')
    cy.get('#nama_lengkap').type('test125')
    cy.get('#username').type('test125')
    cy.get('#email').type('test125@gmail.com')
    cy.get('#nohp').type('00000125')
    cy.get('#password').type('test125')
    cy.get('form > .btn').click()
  })  
})

describe('login', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('test125');
    cy.get('#password').type('test125');
    cy.get('form > .btn').click()
  })  
})

describe('profile', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('test125');
    cy.get('#password').type('test125');
    cy.get('form > .btn').click()
    cy.get('.img-profile').click()
    cy.get('.dropdown-menu > [href="http://greenvestvsr.herokuapp.com/profile"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('halo')
    cy.get(':nth-child(10) > :nth-child(2) > .btn').click()
  })  
})

describe('pengaturan add payment method', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('test125');
    cy.get('#password').type('test125');
    cy.get('form > .btn').click()
    cy.get(':nth-child(10) > .nav-link').click()
    cy.get('.d-sm-flex > a > .btn').click()
    cy.get(':nth-child(2) > .form-control').type('50000000')
    cy.get(':nth-child(4) > :nth-child(2) > .btn').click()
  })  
})

describe('test simulasi investasi', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('test125');
    cy.get('#password').type('test125');
    cy.get('form > .btn').click()
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click()
    cy.get('.link-info').click()
    cy.get('.shadow-custom-alt').click()
    cy.get('.form-control').type('5000000')
    cy.get('.col > .btn').click()
  })  
})
