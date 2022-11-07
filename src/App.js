import React from 'react';
// import './styles/App.scss';

import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Contact from './components/pages/Contact/Contact';
import Explore from './components/pages/Explore/Explore';
import ProductPrice from './components/pages/ProductPrice/ProductPrice';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/ProductPrice/:id' component={ProductPrice} />
            {/* <Route exact path="/updatePost/:id" component={UpdatePost} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
