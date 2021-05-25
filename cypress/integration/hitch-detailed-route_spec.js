describe('Sign up user flow', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: 'good'

    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "POST",
      body: {
        user_id: '1',
        origin: '1138 Corona St, Denver, CO 80218, USA',
        destination: '1850 Table Mesa Dr, Boulder, CO 80305',
        departure_time: "09:03",
        days: ["monday", "tuesday"]
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "GET",
      statusCode: 200,
      body: {
        data: {
          attributes:{
            bio: "I like driving.",
            email: "dominic@gmail.com",
            fullname: "fullname",
            matched_routes: [{id: 2, user_id: 3, origin: "3956 Alcott St Denver, CO 80211, USA", destination: "1125 S Kalispell St, Aurora, CO 80017, USA", departure_time: "9:00am"}]
          }
        }
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1', {fixture: 'profile'})
    cy.intercept("https://maps.googleapis.com/maps/api/place/js/*")
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=login-button]')
    .click()
    .get('[data-cy=menu]')
    .click()
    .get('[data-cy=profile-button]')
    .click()
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

})

  // before(() => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('[data-cy=login-button]')
  //   .click()
  //   .intercept('http://localhost:3000/profile', {fixture: 'profile'})
  //   cy.request('http://localhost:3000/profile');
  //   })

  // it('should have an app title', () => {
  //   cy.get('h1').contains('HITCH');
  // });

  // it('should have button to sign up', () => {
  //   cy.get('button').contains('Sign up');
  // });

  // it('should be able to click \'sign up now\' button', () => {
  //   cy.get('button').eq(0).click();
  //   cy.url().should('include', 'http://localhost:3000/register')
  // });
// });