import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar';
import './App.css'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import CreateMessage from'./components/screens/CreateMessage'



function App() {
  return (
     <BrowserRouter>
     <NavBar />
     <Route exact path="/"  >
       <Home />
     </Route>
     <Route path="/signup" >
       <Signup/>
     </Route>
     <Route path="/signin" >
       <Signin />
     </Route>
     <Route path="/CreateMessage" >
       <CreateMessage/>
     </Route>
     </BrowserRouter>
        
    );
}

export default App;
