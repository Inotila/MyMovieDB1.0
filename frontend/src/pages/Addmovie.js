import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { getApiKey, addMovie } from '../services/myMovieService';
import NavigationBar from '../components/Navbar';

const Addmovie = () => {
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [trailerLink, setTrailerLink] = useState('');
    const navigate = useNavigate();

    const handleAddMovie = async () => {
        try {
            const apiKey = await getApiKey();
            const newMovie = { title, poster, trailer_link: trailerLink };
            const response = await addMovie(newMovie, apiKey);
            if (response.success) {
                alert('Movie added successfully!');
                navigate('/');
            } else {
                alert('Failed to add movie');
            }
        } catch (error) {
            console.error('Error adding movie:', error);
            alert('Failed to add movie: An unexpected error occurred');
        }
    };

    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <h1>Add New Movie</h1>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                    <Form.Control
                        placeholder="Title"
                        aria-label="Title"
                        aria-describedby="basic-addon1"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">Poster URL</InputGroup.Text>
                    <Form.Control
                        placeholder="Poster URL"
                        aria-label="Poster"
                        aria-describedby="basic-addon2"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">Trailer Link</InputGroup.Text>
                    <Form.Control
                        placeholder="Trailer Link"
                        aria-label="Trailer Link"
                        aria-describedby="basic-addon3"
                        value={trailerLink}
                        onChange={(e) => setTrailerLink(e.target.value)}
                    />
                </InputGroup>
                <Button variant="primary" onClick={handleAddMovie}>Add Movie</Button>
            </div>
        </div>
    );
};

export default Addmovie;
