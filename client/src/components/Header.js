
import React, { useState, useRef, useEffect } from 'react';
import Results from './Results';
import './Header.css';

function Header() {
    const [artistName, setArtistName] = useState('');
    const [similarArtists, setSimilarArtists] = useState(null);
    const inputRef = useRef();


    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/get_recommendations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ artist_name: artistName })
        }); 
        try {
            const data = await response.json();
            if (response.ok) {
                
                // Check if the response contains an error
                if (data.error) {
                    console.error('Server error:', data.error);
                    alert('Server error: Unable To Contact Server.');
                } else {
                    setSimilarArtists(data.similar_artists);
                }
            } else {
                console.error('Response error:', response.status);
                alert('Response error: ' + response.status);
            }
        } catch (error) {
            console.error('JSON parsing error:', error);
            alert('JSON parsing error: ' + error.message);
        }
    };

    return (
        <>
            <div className='search-container m-8'>
                <div className='field-container bg-gray-900'>
                    <form className='field' onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            id="artist_name"
                            name="artist_name"
                            value={artistName}
                            onChange={(event) => setArtistName(event.target.value)}
                            placeholder='Enter the name of an artist you like'
                            required
                        />
                        <button type="submit" class="border border-gray-700 hover:border-white">Find Artists</button>
                    </form>
                </div>
            </div>

            {similarArtists && <Results similarArtists={similarArtists} />}

        </>
    );
}

export default Header;
