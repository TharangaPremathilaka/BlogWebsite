
import React from 'react';
import { Box } from '@material-ui/core';
//import AppWithRouterAccess from './AppWithRouterAccess';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import { useState } from 'react'


//components
 import Header from './components/Header';
 import Register from "./components/register/register";
 import Login from "./components/login/login";
 import Home from './components/home/Home';
 import DetailView from './components/post/DetailView';
 import CreateView from './components/post/CreateView';
 import UpdateView from './components/post/UpdateView';
 import About from './components/about/About';
 import Contact from './components/contact/Contact';
 import Footer from "./components/footer/Footer";
 import Logout from "./components/logout/Logout"


 //import ContextProvider from './context/ContextProvider';

function App() {

  return (
      <BrowserRouter>
         <Header />
        <Box style={{marginTop: 64}}>
          <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/login' component={Login} />
               <Route exact path='/register' component={Register} />
               <Route exact path='/details/:id' component={DetailView} />
               <Route exact path='/create' component={CreateView} />
               <Route exact path='/update/:id' component={UpdateView} />
               <Route exact path='/about' component={About} />
               <Route exact path='/contact' component={Contact} />
               <Route exact path='/footer' component={Footer} />
               <Route exact path='/logout' component={Logout} />
               
          </Switch>
        </Box> 
      </BrowserRouter>
    
  );

  
}

export default App;
