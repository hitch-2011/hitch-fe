describe('Profile user flow', () => {
  before(() => {
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
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {fixture: "matched-rides"})
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1', {fixture: 'profile'})
    cy.intercept("https://maps.googleapis.com/maps/api/place/js/*")
    .visit('http://localhost:3000');
    cy.get('.login__btn')
    .click()
    .get('.route-card').first()
    .click()
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('Should allow user to click on matched route', () => {

  })

  it('Should display the users name and details', () => {
    cy.get('[data-cy=user-name]')
    .contains("John Smith")
    .get('[data-cy=user-bio]')
    .contains("long walks on the beach")
    .get('[data-cy=user-model]')
    .contains("Civic")
  });

  it('Should display the users drive time and days', () => {
    cy.get('[data-cy=user-time]')
    .contains("9:00am")
    .get('[data-cy=user-days]')
    .contains("M")
    .get('[data-cy=user-days]')
    .contains("W")
  });

  it('Should display origin and destination zip code', () => {
    cy.get('[data-cy=origin-zip]')
    .contains("80211")
    .get('[data-cy=destination-zip]')
    .contains("80017")
  });

  it('Should display a button to add a route', () => {
    cy.get('[data-cy=request-hitch]')
    .contains("Request a Hitch")
  });

  it('Should allow the user to click on the menu', () => {
    cy.get('[data-cy=menu]')
    .click()
    .get('[data-cy=profile-button]')
    .should('exist')
  });
})

