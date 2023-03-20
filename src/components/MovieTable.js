import React from 'react';
import MovieRow from './MovieRow';

export default function MovieTable({ results }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Streaming</th>
                        <th>Trailer</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => <MovieRow key={result.id} result={result}></MovieRow>)}
                </tbody>
            </table>
        </div>
    )
}