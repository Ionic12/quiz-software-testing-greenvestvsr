describe('Register', () => {
  it('Pass', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/register')
    cy.get('#nama_lengkap').type('Iqshan Bagus Prasetyo')
    cy.get('#username').type('Iqshan')
    cy.get('#email').type('2041720096@student.polinema.ac.id')
    cy.get('#nohp').type('089630303741')
    cy.get('#password').type('testtest')
    cy.get('form > .btn').click()
  })  
})

describe('Login', () => {
  it('Pass', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('Iqshan');
    cy.get('#password').type('testtest');
    cy.get('form > .btn').click()
  })  
})

describe('TC_Profile_01 : Update Nama Lengkap', () => {
  it('Pass', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('Iqshan');
    cy.get('#password').type('testtest');
    cy.get('form > .btn').click()
    cy.get('.img-profile').click()
    cy.get('.dropdown-menu > [href="http://greenvestvsr.herokuapp.com/profile"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > .form-control').clear()
    cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('Test Case')
    cy.get(':nth-child(10) > :nth-child(2) > .btn').click()
  })  
})

describe('TC_Profile_02 : Invalid No Hp', () => {
  it('Pass', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('Iqshan');
    cy.get('#password').type('testtest');
    cy.get('form > .btn').click()
    cy.get('.img-profile').click()
    cy.get('.dropdown-menu > [href="http://greenvestvsr.herokuapp.com/profile"]').click()
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').clear()
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('Test Case')
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').clear()
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('Test Case')
    cy.get(':nth-child(10) > :nth-child(2) > .btn').click()
  })  
})

describe('TC_Profile_03 : Semua Field Kosong', () => {
  it('Pass', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('Iqshan');
    cy.get('#password').type('testtest');
    cy.get('form > .btn').click()
    cy.get('.img-profile').click()
    cy.get('.dropdown-menu > [href="http://greenvestvsr.herokuapp.com/profile"]').click()
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').clear()
    cy.get(':nth-child(3) > :nth-child(1) > .form-control').clear()
    cy.get(':nth-child(10) > :nth-child(2) > .btn').click()
  })  
})

describe('TC_Profile_04 : Invalid Format Photo Profile', () => {
  it('Pass', () => {
    const pdf = 'TC_Profile_04.pdf'
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('Iqshan');
    cy.get('#password').type('testtest');
    cy.get('form > .btn').click()
    cy.get('.img-profile').click()
    cy.get('.dropdown-menu > [href="http://greenvestvsr.herokuapp.com/profile"]').click()
    cy.get('.form-input').selectFile(pdf)
    cy.get(':nth-child(10) > :nth-child(2) > .btn').click()
  })  
})

describe('TC_Profile_05 : Invalid Size Photo Upload', () => {
  it('Pass', () => {
    const pic = 'TC_Profile_05.jpg'
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('Iqshan');
    cy.get('#password').type('testtest');
    cy.get('form > .btn').click()
    cy.get('.img-profile').click()
    cy.get('.dropdown-menu > [href="http://greenvestvsr.herokuapp.com/profile"]').click()
    cy.get('.form-input').selectFile(pic)
    cy.get(':nth-child(10) > :nth-child(2) > .btn').click()
  })  
})
// describe('pengaturan add payment method', () => {
//   it('passes', () => {
//     cy.visit('http://greenvestvsr.herokuapp.com/login')
//     cy.get('#username').type('test125');
//     cy.get('#password').type('test125');
//     cy.get('form > .btn').click()
//     cy.get(':nth-child(10) > .nav-link').click()
//     cy.get('.d-sm-flex > a > .btn').click()
//     cy.get(':nth-child(2) > .form-control').type('50000000')
//     cy.get(':nth-child(4) > :nth-child(2) > .btn').click()
//   })  
// })

// describe('test simulasi investasi', () => {
//   it('passes', () => {
//     cy.visit('http://greenvestvsr.herokuapp.com/login')
//     cy.get('#username').type('test125');
//     cy.get('#password').type('test125');
//     cy.get('form > .btn').click()
//     cy.get(':nth-child(7) > .nav-link').click()
//     cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click()
//     cy.get('.link-info').click()
//     cy.get('.shadow-custom-alt').click()
//     cy.get('.form-control').type('5000000')
//     cy.get('.col > .btn').click()
//   })  
// })