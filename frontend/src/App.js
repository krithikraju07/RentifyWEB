import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddProperty from './components/AddProperty';
import PropertyList from './components/PropertyList';
import './App.css';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <div>
                <h1>Rentify</h1>
                <nav>
                    <Link to="/"><button>Property List</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                    <Link to="/login"><button>Login</button></Link>
                    {token && <Link to="/add-property"><button>Add Property</button></Link>}
                </nav>
                <Routes>
                    <Route path="/" element={<PropertyList />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/add-property" element={<AddProperty token={token} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
