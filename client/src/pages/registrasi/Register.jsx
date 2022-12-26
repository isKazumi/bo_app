import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import './register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: undefined,
        country: undefined,
        city: undefined,
        phone: undefined,
        password: undefined,
    });

    const handleChange = (event) => {
        setFormData((fromData) => ({ ...formData, [event.target.name]: event.target.value }));
    };

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('/auth/register', formData);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
            Navigate('/login');
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="rcontainer">
                <label>Nama Pengguna</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label>Negara</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} />
                <label>Kota</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                <label>No.Telp</label>
                <input type="telp" name="phone" value={formData.phone} onChange={handleChange} />
                <label>Kata Sandi</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <button className="btn-regis" type="submit" disabled={loading} onClick={handleSubmit}>
                    Daftar
                </button>
                <Link to="/login">
                    <button className="btn-log">Login</button>
                </Link>
                {error && <span>{error.message}</span>}
            </div>
        </form>
    );
}

export default Register;
