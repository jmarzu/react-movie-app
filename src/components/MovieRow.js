import React from 'react';
import MovieTrailer from './shared/MovieTrailer';

export default function MovieRow({ result }) {
    const streamingLink = `https://www.bing.com/search?q=${result.title}+streaming`;
    
    return (
        <tr>
            <td>
                <img className="img-fluid row-image" src={result.image} alt={result.title}/>
            </td>
            <td>{result.title}</td>
            <td>{result.description}</td>
            <td>
                <a href={streamingLink} target="_blank" rel="noreferrer">Streaming</a>
            </td>
            <td>
                <MovieTrailer 
                    result={result} 
                    isLink={true} 
                    id={result.id}
                ></MovieTrailer>
            </td>
        </tr>
    )
}