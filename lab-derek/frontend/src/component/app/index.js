import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import appStoreCreate from '../../lib/app-store-create.js';
import LandingContainer from '../landing-container';
import SettingsContainer from '../settings-container';
import DashboardContainer from '../dashboard-container';

const store = appStoreCreate();

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <h1> It works. </h1>
                <nav>
                  <ul>
                    <li>
                      <Link to='/welcome/signup'>
                        signup
                      </Link>
                    </li>
                    <li>
                      <Link to='/welcome/login'>
                        login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </header>
              <main>
                <Route exact path='/welcome/:auth' component={LandingContainer}></Route>
                <Route exact path='/settings' component={SettingsContainer}></Route>
                <Route exact path='/dashboard' component={DashboardContainer}></Route>
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
