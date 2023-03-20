import React, { useState } from 'react';
import axios from 'axios';
import SpinnerButton from './SpinnerButtton';
import MovieModal from './MovieModal';

export default function MovieTrailer({ isWhite, isLink, result }) {
    const [loading, setLoading] = useState(false);
    const [trailer, setTrailer] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const defaultClass = 'btn btn-link text-decoration-none p-0'
    const buttonClass = isWhite ? defaultClass + ' text-white' : defaultClass;

    async function getTrailer(event) {
        event.preventDefault();
        setLoading(true);
        const response = await axios.get(`https://imdb-api.com/en/API/Trailer/k_ex70qk9p/${result.id}`);
        
        if (response.status === 200) {
            setModalShow(true);
            setTrailer(response.data);
            setLoading(false);
        }

        setLoading(false);
    }
    return (
        <>
            {
                isLink 
                ?
                <button className={buttonClass} onClick={getTrailer}>
                    {
                        loading === true 
                        ? 
                        <span>
                            <span 
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                        </span>
                        :
                        <span>Get Trailer</span>
                        
                    }
                </button> 
                :
                <span onClick={getTrailer}>
                    <SpinnerButton loading={loading} title="Get Trailer" />
                </span>
            }
            
            <MovieModal
                trailer={trailer}
                result={result}
                show={modalShow}
                onHide={() => setModalShow(false)}
            ></MovieModal>
        </>
    )
}