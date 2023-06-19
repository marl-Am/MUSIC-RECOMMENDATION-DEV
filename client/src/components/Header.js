
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
            <div className='search-container'>
                <div className='field-container'>
                    <form className='field' onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            id="artist_name"
                            name="artist_name"
                            value={artistName}
                            onChange={(event) => setArtistName(event.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            {!similarArtists && (
                <div className='c demo-c'>
                    <br></br><br></br>
                    <div className="cards-list">
                        <a className="card artist-card demo-card" href='#'>
                            <div className="card_image">
                                {/* <img src="#" alt="" /> */}
                            </div>
                        </a>
                        <a className="card artist-card demo-card" href='#'>
                            <div className="card_image">
                                {/* <img src="#" alt="" /> */}
                            </div>
                        </a>
                        <a className="card artist-card demo-card" href='#'>
                            <div className="card_image">
                                {/* <img src="#" alt="" /> */}
                            </div>
                        </a>
                        <a className="card artist-card demo-card" href='#'>
                            <div className="card_image">
                                {/* <img src="#" alt="" /> */}
                            </div>
                        </a>
                        <a className="card artist-card demo-card" href='#'>
                            <div className="card_image">
                                {/* <img src="#" alt="" /> */}
                            </div>
                        </a>
                        <a className="card artist-card demo-card" href='#'>
                            <div className="card_image">
                                {/* <img src="#" alt="" /> */}
                            </div>
                        </a>
                    </div>


                    <br></br><br></br><br></br><br></br><br></br>
                </div>
            )}

            {similarArtists && <Results similarArtists={similarArtists} />}
            <br></br>

        </>
    );
}

export default Header;
