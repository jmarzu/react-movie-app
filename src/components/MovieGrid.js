import React from 'react';
import MovieCard from './MovieCard';

export default function MovieGrid({ results }) {
    return (
        <div className='d-flex align-items-center justify-content-between flex-wrap my-1'>
            {results.map(result => <MovieCard key={result.id} result={result}></MovieCard>)}
        </div>
    )
}