// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/users/${username}`, {
                auth: {
                    username,
                    password
                }
            });
            console.log('Login successful:', response.data);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
