import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { register } from '../services/myMovieService';
import NavigationBar from '../components/Navbar';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await register({ username, password });
            if (response.success) {
                console.log('Register', response);
                navigate('/');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            if (error.response) {
                console.error('Registration error:', error.response.data); 
                alert('Registration failed: ' + error.response.data.message);
            } else {
                console.error('Registration error:', error);
                alert('Registration failed: An unexpected error occurred');
            }
        }
    };

    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <h1>Register</h1>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
                    <Form.Control
                        placeholder="Password"
                        aria-label="Password"
                        type="password"
                        aria-describedby="basic-addon2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">Confirm Password</InputGroup.Text>
                    <Form.Control
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        type="password"
                        aria-describedby="basic-addon3"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </InputGroup>
                <Button variant="primary" onClick={handleRegister}>Register</Button>
            </div>
        </div>
    );
};

export default Register;
