describe('User validation', () => {
  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: ""
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 400,
      body: {}
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "POST",
      body: ""
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "GET",
      statusCode: 400
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "GET",
      statusCode: 200,
      body: {
        data: {
          attributes: {
            bio: "I like driving.",
            email: "dominic@gmail.com",
            fullname: "fullname",
            matched_routes: [{ id: 1, user_id: 3, origin: "3956 Alcott St Denver, CO 80211, USA", destination: "1125 S Kalispell St, Aurora, CO 80017, USA", departure_time: "9:00am", ridedays: ["monday", "tuesday"] }]
          }
        }
      }
    })
    cy.visit('http://localhost:3000/register');

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Name');

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')
    cy.get('input').eq(2)
      .type('billyB')
      .should('have.value', 'billyB')

    cy.get('button').eq(1).click();
    cy.get('button').eq(1).click();

    cy.get('input').eq(0)
      .type('Toyota')
      .should('have.value', 'Toyota')
    cy.get('input').eq(1)
      .type('Tacoma')
      .should('have.value', 'Tacoma')
    cy.get('input').eq(2)
      .type('2001')
      .should('have.value', '2001')

    cy.get('button').eq(1).click();
  });

  it('Should show an error message if an email is already registered', () => {
    cy.get('.error').contains('This email is already registered'); 
  })

})

describe('Route validation', () => {
   beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: ""
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "GET",
      statusCode: 400
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "GET",
      statusCode: 400,
      body: {}
    })
    cy.visit('http://localhost:3000/register');
    cy.intercept("https://maps.googleapis.com/maps/api/place/js/*")

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Name');

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')
    cy.get('input').eq(2)
      .type('billyB')
      .should('have.value', 'billyB')

    cy.get('button').eq(1).click();
    cy.get('textarea')
      .type('this is my bio')
    cy.get('button').eq(1).click();

    cy.get('input').eq(0)
      .type('Toyota')
      .should('have.value', 'Toyota')
    cy.get('input').eq(1)
      .type('Tacoma')
      .should('have.value', 'Tacoma')
    cy.get('input').eq(2)
      .type('2001')
      .should('have.value', '2001')

    cy.get('button').eq(1).click();
    cy.wait(1000)

    cy.get('input').eq(0)
      .type('1138 Corona St, Denver, CO 80218')
      .get('span').eq(0)
      .click()
      .get('input').eq(0)
      .should('have.value', '1138 Corona St, Denver, CO 80218, USA')
    cy.get('input').eq(1)
      .type('1850 Table Mesa Dr, Boulder, CO 80305')
      .should('have.value', '1850 Table Mesa Dr, Boulder, CO 80305')

    cy.get('button').eq(1).click();

    cy.get('[type="checkbox"]').eq(1).check({ force: true })
    cy.get('[type="checkbox"]').eq(5).check({ force: true })
    cy.get('[type="checkbox"]').eq(6).check({ force: true })
    cy.get('.registration__button').click();
  });

  it('Should tell you if a route does not exist', () => {
    cy.get('.error').contains('We could not find a drivable route, please try again')
  });
})