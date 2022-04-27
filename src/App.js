import React, { useContext, Fragment } from 'react';
import AuthContext from './store/auth-context';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Home from './components/home/Home';


function App() {

  const context = useContext(AuthContext)

  return (
    <Fragment>
      <Header />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
