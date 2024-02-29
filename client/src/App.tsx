import React from 'react';
import Login from './pages/authenticate/login';
import Register from './pages/authenticate/register';
import { Route, Routes } from 'react-router-dom';
import Page from './pages/desktop';

function App() {
  return (
    <div className="App text-gray-400">
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/channels' Component={Page}/>
      </Routes>
    </div>
  );
}

export default App;
