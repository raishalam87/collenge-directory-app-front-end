// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        role: 'STUDENT',
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/users/register', user);
        alert('User registered!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
            <select name="role" onChange={handleChange}>
                <option value="STUDENT">Student</option>
                <option value="FACULTY_MEMBER">Faculty Member</option>
                <option value="ADMINISTRATOR">Administrator</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
