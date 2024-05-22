import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users/login', form)
            .then(response => {
                setToken(response.data.token);
                console.log('Logged in successfully!', response.data);
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error logging in!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
