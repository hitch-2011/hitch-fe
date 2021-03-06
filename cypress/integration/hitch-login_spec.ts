import { createYield } from "typescript";

describe('Sign up user flow', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    });
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides');
    cy.visit('http://localhost:3000/');
  });
  it('should have an app title', () => {
    cy.get('h1').contains('HITCH');
  });

  it('should have button to sign up', () => {
    cy.get('button').contains('Sign up');
  });

  it('should be able to click \'sign up now\' button', () => {
    cy.get('button').eq(0).click();
    cy.url().should('include', 'http://localhost:3000/register')
  });
});

describe('User name input', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"

    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides');
    cy.visit('http://localhost:3000/register');
  });

  it('should have an app title', () => {
    cy.get('h1').contains('HITCH');
  });

  it('should have a form title', () => {
    cy.get('.register-form__header').contains('Name');
  });

  it('should contain an input for name, email, and password', () => {
    cy.get('input').should('have.length', 3);
  });

  it('should allow users to select name input and type a name', () => {
    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
  });

  it('should allow users to select email input and type a valid email address', () => {
    cy.get('input').eq(1)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')
  });

  it('should allow users to select password input and type a password', () => {
    cy.get('input').eq(2)
      .type('billyB')
      .should('have.value', 'billyB')
  });

  it('should have a next button to move to next login page', () => {
    cy.get('button').contains('Next');
  });

  it('should be able to click \'next\' button and move to next page after completing all inputs', () => {

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

    cy.get('textarea').should('have.length', 1);
    cy.get('.bio__header').contains('About Me');
  });
});

describe('User name input sad paths', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    });
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides')
    cy.visit('http://localhost:3000/register');
  });

  it('should have an app title and form title', () => {
    cy.get('h1').contains('HITCH');
    cy.get('.register-form__header').contains('Name');
  });

  it('should not be able to click \'next\' button and move to next page if name input is missing', () => {

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(0).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should not be able to click \'next\' button and move to next page if username input is missing', () => {

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(1).should('have.length', 1)
    cy.get('input').eq(1).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should not be able to click \'next\' button and move to next page if email input is missing', () => {

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(2).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should not be able to click \'next\' button and move to next page if password input is missing', () => {

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(2).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should only be able to input a properly formatted e-mail address with an \'@\'', () => {
    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('billy')
      .should('have.value', 'billy')
    cy.get('input').eq(2)
      .type('billyB')
      .should('have.value', 'billyB')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(1).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please include an \'@\' in the email address. \'billy\' is missing an \'@\'.')
    });
  });

  it('should only be able to input a properly formatted e-mail address with text following the \'@\'', () => {
    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('billy@')
      .should('have.value', 'billy@')
    cy.get('input').eq(2)
      .type('billyB')
      .should('have.value', 'billyB')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(1).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please enter a part following \'@\'. \'billy@\' is incomplete.')
    });
  });
});

describe('User car details input', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/vehicles', {
      method: "POST",
      body: {
        make: 'Toyota',
        model: 'Tacoma',
        year: '2001'
      }
    })    
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
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
  });

  it('should have an app and form title', () => {
    cy.get('h1').contains('HITCH');
    cy.get('.register-form__header').contains('Car Details');
  });

  it('should contain an input for a user\'s vehicle car, model, and make', () => {
    cy.get('input').should('have.length', 3);
  });

  it('should allow users to select make input and type a make', () => {
    cy.get('input').eq(0)
      .type('Toyota')
      .should('have.value', 'Toyota')
  });

  it('should allow users to select model input and type a model', () => {
    cy.get('input').eq(1)
      .type('Tacoma')
      .should('have.value', 'Tacoma')
  });

  it('should allow users to select year input and type a year', () => {
    cy.get('input').eq(2)
      .type('2001')
      .should('have.value', '2001')
  });

  it('should have a next button to move to next login page', () => {
    cy.get('button').contains('Next');
  });

  it('should be able to click \'next\' button and move to next page after completing all inputs', () => {

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Car Details');

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

    cy.get('input').should('have.length', 2);
    cy.get('.origin-destination__header').contains('Origin and Destination');
  });
});

describe('User car details input sad paths', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/vehicles', {
      method: "POST",
      body: {
        make: 'Toyota',
        model: 'Tacoma',
        year: '2001'
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
    cy.wait(500)
  });

  it('should have an app form title, and car details inputs', () => {
    cy.get('h1').contains('HITCH');
    cy.get('.register-form__header').contains('Car Details');
    cy.get('input').should('have.length', 3);
  });

  it('should not be able to click \'next\' button and move to next page if make input is missing', () => {

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(0).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })
    cy.get('.register-form__header').contains('Origin and Destination').should('not.exist')
  });

  it('should not be able to click \'next\' button and move to next page if model input is missing', () => {

    cy.get('input').eq(0)
      .type('Toyota')
      .should('have.value', 'Toyota')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(1).should('have.length', 1)
    cy.get('input').eq(1).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })

    cy.get('.register-form__header').contains('Origin and Destination').should('not.exist')
  });

  it('should not be able to click \'next\' button and move to next page if year input is missing', () => {

    cy.get('input').eq(0)
      .type('Toyota')
      .should('have.value', 'Toyota')
    cy.get('input').eq(1)
      .type('Tacoma')
      .should('have.value', 'Tacoma')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(2).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })

    cy.get('.register-form__header').contains('Origin and Destination').should('not.exist')
  });
});

describe('User origin and destination input', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })  
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/vehicles', {
      method: "POST",
      body: {
        make: 'Toyota',
        model: 'Tacoma',
        year: '2001'
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
    cy.get('button').eq(1).click().wait(1000);

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
  });

  it('should have an app and form title', () => {
    cy.get('h1').contains('HITCH');
    cy.get('.origin-destination__header').contains('Origin and Destination');
  });

  it('should contain an input for a user\'s origin and destination', () => {
    cy.get('input').should('have.length', 2);
  });

  it('should allow users to select origin input and type an origin', () => {
    cy.get('input').eq(0)
      .type('2199 S University Blvd, Denver, CO 80208')
      .should('have.value', '2199 S University Blvd, Denver, CO 80208')
  });

  it('should allow users to select destination input and type a destination', () => {
    cy.get('input').eq(1)
      .type('1850 Table Mesa Dr, Boulder, CO 80305')
      .should('have.value', '1850 Table Mesa Dr, Boulder, CO 80305')
  });

  it('should have a next button to move to next login page', () => {
    cy.get('button').contains('Next');
  });

  it('should be able to click \'next\' button and move to next page after completing all inputs', () => {

    cy.get('input').should('have.length', 2);
    cy.get('.origin-destination__header').contains('Origin and Destination');

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

    cy.get('input').should('have.length', 8);
    cy.get('.days-and-time__header').contains('Days and Time');
  });
});

describe('User origin and destination sad paths', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/vehicles', {
      method: "POST",
      body: {
        make: 'Toyota',
        model: 'Tacoma',
        year: '2001'
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
    cy.get('button').eq(1).click().wait(1000);

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
  });

  it('should have an app and form title, and inputs', () => {
    cy.get('h1').contains('HITCH');
    cy.get('.origin-destination__header').contains('Origin and Destination');
    cy.get('input').should('have.length', 2);
  });

  it('should not be able to click \'next\' button and move to next page if origin input is missing', () => {

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(0).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should not be able to click \'next\' button and move to next page if year input is missing', () => {

    cy.get('input').eq(0)
      .type('2199 S University Blvd, Denver, CO 80208')
      .should('have.value', '2199 S University Blvd, Denver, CO 80208')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(1).then(($input) => {
      expect(($input[0] as HTMLInputElement).validationMessage).to.eq('Please fill out this field.')
    })
  });
});


describe('User about me section', () => {

  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    }) 
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/vehicles', {
      method: "POST",
      body: {
        make: 'Toyota',
        model: 'Tacoma',
        year: '2001'
      }
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
  });
  it('should be able to click \'next\' button and move to next page after completing time and day inputs', () => {
    cy.get('input').should('not.exist')
    cy.get('.bio__header').contains('About Me');
  });
});

describe('Days and time', () => {
  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })  
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/vehicles', {
      method: "POST",
      body: {
        make: 'Toyota',
        model: 'Tacoma',
        year: '2001'
      }
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
    cy.get('button').eq(1).click().wait(1000);

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
  })

  it('should have an app and form title', () => {
    cy.get('h1').contains('HITCH');
    cy.get('.days-and-time__header').contains('Days and Time');
  });

  it('should contain an input for a user\'s time of travel and days', () => {
    cy.get('input').should('have.length', 8);
  });

  it('should allow users to select a time input', () => {
    cy.get('input').eq(0)
      .type('09:30')
      .should('have.value', '09:30')
  });

  it('should allow users to select a day input', () => {
    cy.get('[type="checkbox"]').eq(0).check({ force: true }).and('have.value', 'sunday')
  });

  it('should allow users to select any number of day(s) input', () => {
    cy.get('[type="checkbox"]').eq(1).check({ force: true }).and('have.value', 'monday')
    cy.get('[type="checkbox"]').eq(5).check({ force: true }).and('have.value', 'friday')
    cy.get('[type="checkbox"]').eq(6).check({ force: true }).and('have.value', 'saturday')
  });
})

describe('Back button', () => {
  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })   
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/vehicles', {
      method: "POST",
      body: {
        make: 'Toyota',
        model: 'Tacoma',
        year: '2001'
      }
    }) 
    cy.visit('http://localhost:3000/register');

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Name');
  });

  it('Should not be present on the first page of form', () => {
    cy.get("registration__back-btn").should('not.exist')
  })

  it('Should bring you back one page when clicked', () => {
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

    cy.get(".registration__back-btn").contains('Back');

    cy.get(".registration__back-btn").click();

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Name');
  })
})