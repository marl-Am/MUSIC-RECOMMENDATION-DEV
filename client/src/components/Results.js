import React from 'react';
import './Results.css';

function Results({ similarArtists }) {
    return (
        <div className='c'>
            <br></br><br></br>
            <div className="cards-list bg-gray-900">
                {similarArtists?.map((artist) => (
                    <a className="card artist-card" key={artist.id} href={`https://open.spotify.com/artist/${artist.id}`} target="_blank" rel="noopener noreferrer">
                        <div className="card_image">
                            {artist.image_url ? (
                                <img src={artist.image_url} alt="Artist picture" />
                            ) : (
                                <img src="static/img/not_found.png" alt="Not Found" />
                            )}
                        </div>
                        <div className="card_title artist-name">
                            <p>{artist.name}</p>
                        </div>
                    </a>
                ))}
            </div>
            <br className='mb-2'></br>
            
        </div>
    );
}

export default Results;

