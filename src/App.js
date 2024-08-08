import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AccountList from './components/AccountList';
import CreateAccount from './components/CreateAccount';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<h2>This is a true Bank!</h2>} />
            <Route path="/accounts" element={<AccountList />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
