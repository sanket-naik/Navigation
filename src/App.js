import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Onboarding from './components/Onboarding';


function App() {
  return (
    <>
      <div className="text-center">
        Home
      </div>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}


function Users() {
  return <h2>Users</h2>;
}

export default App;
