[![PWA Shields](https://www.pwa-shields.com/1.0.0/series/react/solid/white/gray.svg)](https://hitch-a-ride-app.herokuapp.com/)
[![Build Status](https://travis-ci.com/hitch-2011/hitch-fe.svg?branch=main)](https://travis-ci.com/hitch-2011/hitch-fe.svg?branch=main)


<h1 align="left">Hitch</h1>

<p align="center">
  <a href="https://hitch-a-ride-app.herokuapp.com/">
    <img src="./public/logo192.png" alt="Red Cartoon Car" width="200" height='auto'>
  </a>
    <p align="center">
    <br />
    <a href="https://hitch-a-ride-app.herokuapp.com/"><strong>Explore the app »</strong></a>
    <br />
    <br />
    </p>
  </p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [Learning Goals](#learning-goals)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

Hitch is a progressive web application (PWA), using a mobile first desgin to help cars off road and stuff.......

View the deployed site: [here](https://hitch-a-ride-app.herokuapp.com/)

View the backend repo: [here](https://github.com/hitch-2011/hitch_backend)

## Installation

1. Fork this repository.
2. Clone it down to your local machine with `git clone <your SSH Key>`.
3. Navigate into this directory with `cd hitch-fe`.
4. Run `npm install` to compile the React application.
5. Run `npm start` to see the app running locally.
6. Run `<your text editor> .` to see the code in your text editor.
7. Run `npm run cypress` to open Cypress and see all the tests.


## Functionality
* [Login or Signup](#login-or-signup)
* [Matched Rides](#matched-rides)
* [Ride Profile](#ride-profile)
* [Accessibility](#accessibility)
* [Error Handling](#error-handling)

#### Login or Signup
  - When a user visits the site they are able to signup or login to their profile. The login feature is under development at the moment, and seeded with dummy data for now. 
<img src="" width="1440">

#### Matched Rides
  - After a user signups or logins in, they are redirected to a matched rides view, which displays all rides within 4 miles of the current users route. 

<img src="" width="1440">

#### Ride Profile
 - Using the hamburger menu, a user can view their own profile, or when clicking on a matched ride see the route details.
 <img src="" width="500" align="center">

#### Accessibility 

We made accessibility a priority in our application. Hitch recieved a 100% acecessibility audit from Chrome's Lighthouse tool. Also using the Wave extension, our application has zero errors and zero contrast errors. 

#### Error Handling
To maintain a better user experience, we implemented dynamic error handling, so that a user will receive a unique error message based on the type of error.


## Learning Goals

- Learn and implement progressive web app (PWA) technology.
- To further our understanding of TypeScript; types, interfaces, and type errors.
- Work with a backend team to hit different endpoints, send and receive data, and handle errors.
- Use TravisCI to set up continuous integration for development and production builds.
- Create an accessible mobile app that has a clean UI and simple UX.
- Testing user stories and user flows using `Cypress`.


## Future Iterations

- Implement Auth0 or Firebase for users to create a unique login experience
- Add friend/hitch request feature, to pair users with similar commutes
- Add a messaging feature to allow matched users to communicate with each other, possibly using WebSockets
- Implement more PWA features, such as push notifications for requests, matches, and messages.


## Technologies Used

<p align="center">
 <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
 <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
 <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
 <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
 <img alt="React Hooks" src="https://img.shields.io/badge/React Hooks-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
</p>
<p align="center">
 <img alt="React PWA" src="https://img.shields.io/badge/React PWA-007ACC?style=for-the-badge&logo=react&logoColor=61DAFB">
 <img alt="Cypress" src="https://img.shields.io/badge/cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white">
 <img alt="SASS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
 <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
 <img alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
 <img alt="Travis CI" src="https://img.shields.io/badge/Travis CI-3EAAAF?style=for-the-badge&logo=travis-ci&logoColor=white">
 <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black">
</p>


## Contributors

### Frontend Team
* [Alex Thompson](https://github.com/alexthompson207) - Application Creator
* [Paige Vannelli](https://github.com/PaigeVannelli) - Application Creator
* [Steven Mancine](https://github.com/itsnameissteven) - Application Creator
### Backend Team
* [Cydnee Owens](https://github.com/cowens87) - Application Creator
* [Dominic Padula](https://github.com/domo2192) - Application Creator
* [Jake Volpe](https://github.com/javolpe) - Application Creator


## Contact

[<img src="https://img.shields.io/badge/LinkedIn-alex--thompson-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin]
[<img src="https://img.shields.io/badge/Github-AlexThompson207-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github]
[<img src="https://img.shields.io/badge/LinkedIn-paige--vannelli-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-PaigeVannelli-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]

[<img src="https://img.shields.io/badge/LinkedIn-steven--mancine-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin3]
[<img src="https://img.shields.io/badge/Github-itsnameissteven-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github3]
[<img src="https://img.shields.io/badge/LinkedIn-cydnee--owens-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin4]
[<img src="https://img.shields.io/badge/Github-cowens87-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github4]

[<img src="https://img.shields.io/badge/LinkedIn-dominic--padula-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin5]
[<img src="https://img.shields.io/badge/Github-domo2192-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github5]
[<img src="https://img.shields.io/badge/LinkedIn-jake--volpe-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin6]
[<img src="https://img.shields.io/badge/Github-javolpe-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github6]



<!-- Personal Definitions  -->

[linkedin]: https://www.linkedin.com/in/alex-thompson-he-him/
[github]: https://github.com/alexthompson207
[linkedin2]: https://www.linkedin.com/in/paigevannelli/
[github2]: https://github.com/PaigeVannelli
[linkedin3]: https://www.linkedin.com/in/steven-mancine-13509521/
[github3]: https://github.com/itsnameissteven
[linkedin4]: https://www.linkedin.com/in/cydnee-owens-5280/
[github4]: https://github.com/cowens87
[linkedin5]: https://www.linkedin.com/in/dominic-padula/
[github5]: https://github.com/domo2192
[linkedin6]: https://www.linkedin.com/in/jake-volpe-bb602b126/
[github6]: https://github.com/javolpe
