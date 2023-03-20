import React, { useState } from 'react';
import '../styles/Movie.css';
import MovieTable from './MovieTable';
import axios from 'axios';
import MovieGrid from './MovieGrid';
import SpinnerButton from './shared/SpinnerButtton';
import useLocalStorage from "../hooks/useLocalStorage";
import MovieTheater from './MovieTheater';

const VIEW = {
    TABLE: 'TABLE',
    GRID: 'GRID',
    THEATER: 'THEATER'
}

export default function Movie() {
    const [results, setResults] = useState([]);
    const [view, setView] = useLocalStorage('View', VIEW.TABLE);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentSearch, setCurrentSearch] = useState('');

    async function getData(e) {
        e.preventDefault();
        setLoading(true);

        const response = await axios.get(`https://imdb-api.com/en/API/Search/k_ex70qk9p/'${searchTerm}`);
        setCurrentSearch(searchTerm);

        if (response.status === 200) {
            setResults(response.data.results);
            setSearchTerm('');
            setLoading(false);
        }

        setLoading(false);
    }

    return (
        <div>
            <h1 className="title">The Movie App</h1>
            <form onSubmit={e => getData(e)} className="row mb-3">
                <div className='col-md mb-3 mb-md-0 mr-md-1'>
                    <input
                        className="form-control"
                        placeholder='Search For Movies and Shows'
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className='col-md-2'>
                    <SpinnerButton title="Search" loading={loading}></SpinnerButton>
                </div>
            </form>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    {currentSearch?.length ? `Current Search: ${currentSearch}` : ''}
                </div>
                <div className="btn-group" role="group" aria-label="Choose the view">
                    <input 
                        type="radio" 
                        className="btn-check" 
                        name="view" 
                        id="table" 
                        value={VIEW.TABLE}
                        onChange={e => setView(e.target.value)}
                        checked={view === VIEW.TABLE}
                    />
                    <label className="btn btn-outline-primary" htmlFor="table">TABLE</label>

                    <input 
                        type="radio" 
                        className="btn-check" 
                        name="view" 
                        id="grid" 
                        value={VIEW.GRID}
                        onChange={e => setView(e.target.value)}
                        checked={view === VIEW.GRID}
                    />
                    <label className="btn btn-outline-primary" htmlFor="grid">GRID</label>

                    <input 
                        type="radio" 
                        className="btn-check" 
                        name="view" 
                        id="theater" 
                        value={VIEW.THEATER}
                        onChange={e => setView(e.target.value)}
                        checked={view === VIEW.THEATER}
                    />
                    <label className="btn btn-outline-primary" htmlFor="theater">THEATER</label>
                </div>
            </div>
            {
                loading === true
                ? 
                <div className="d-flex align-items-center m-5">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
                :
                ''
            }
            {view === VIEW.TABLE && loading === false ? <MovieTable results={results}></MovieTable> : ''}
            {view === VIEW.GRID && loading === false ? <MovieGrid results={results}></MovieGrid> : ''}
            {view === VIEW.THEATER && loading === false ? <MovieTheater results={results}></MovieTheater> : ''}
        </div>
    )
}