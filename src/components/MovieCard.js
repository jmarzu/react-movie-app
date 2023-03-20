import React from 'react';
import '../styles/MovieCard.scss';

export default function MovieCard({ result }) {
    const streamingLink = `https://www.bing.com/search?q=${result?.title}+streaming`;
    
    return (
        <div>
            <div>
                {
                    result?.image?.length 
                    ?
                    <div className="img-fluid tile" href="#">
                        <img src={result.image} alt="Movie" />
                        <div className="details">
                            <span className="title">{result?.title}</span>
                            <span className="info">
                                <div>
                                    <a className='text-white text-decoration-none' href={streamingLink} target="_blank" rel="noreferrer">Streaming</a>
                                </div>
                            </span>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    )
}