import React, { useState } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Registration from '../Registration/Registration';
import MatchedRoutes from '../MatchedRoutes/MatchedRoutes';
import Header from '../Header/Header';
import { routeData } from '../../mockData';
import DetailedRoute from '../DetailedRoute/DetailedRoute';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departTime, setDepartTime] = useState('08:00');
  const [days, setDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  });
  const [page, setPage] = useState(0);
  const [bio, setBio] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const formProps = {
    name, setName, email,
    setEmail, page, setPage, make, setMake, model, setModel, year, setYear, origin,
    setOrigin, destination, setDestination, days, setDays, departTime, setDepartTime,
    password, setPassword, bio, setBio, isLoggedIn, setIsLoggedIn
  };

  return (
    <div className="app">
      <Header 
        menuIsOpen={menuIsOpen} 
        toggleMenu={() => setMenuIsOpen(!menuIsOpen)}
        isLoggedIn={isLoggedIn}
      /> 
      {isLoggedIn && <Redirect to="/matched-routes" />}
      <Switch>
        <Route
          exact path="/"
          render={() => <LandingPage />}
        />
        <Route
          exact path="/matched-routes"
          render={() => <MatchedRoutes routes={routeData.allRoutes} />}
        />
        <Route
          exact path="/register"
          render={() => <Registration {...formProps} />}
        />
        <Route
            exact path='/profile'
            render={({ match }) => {
              return (
                <DetailedRoute />
              )
            }}
          />
      </Switch>
    </div>
  );
}
export default App;
