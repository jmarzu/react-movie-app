import React, { useState } from 'react';
import '../styles/MovieTheater.scss';
import MovieTrailer from './shared/MovieTrailer';

export default function MovieTheater({ results }) {
    const firstResult = results?.length && results[0];
    const [selected, setSelected] = useState(firstResult);

    const selectedArray = results.map((result, index) => {
        return { index, ...result }
    });

    function next() {
        const newSelected = selectedArray.filter(s => {
            const id = selected.index + 1;
            if (id < (selectedArray.length - 1)) {
                return s.index === id;
            } else {
                return s.index === 0
            }
            
        });
        setSelected(newSelected[0]);
    }

    function previous() {
        const newSelected = selectedArray.filter(s => {
            const id = selected.index - 1;
            if (id >= 0) {
                return s.index === id;
            } else {
                return s.index === (selectedArray.length - 1);
            }
            
        });
        setSelected(newSelected[0]);
    }

    return (
        <div>
            {
                selected
                ?
                <div className='selected-viewer'>
                    <button 
                        onClick={previous} 
                        className="btn btn-lg btn-outline"
                    >
                        {'<'}
                    </button>

                    <div>
                        <div>
                            <h5>{selected.title}</h5>
                            <MovieTrailer 
                                result={selected} 
                                isLink={true} 
                                id={selected.id}
                            ></MovieTrailer>
                        </div>
                        <div>
                            <img className='selected-img' src={selected.image} alt={selected.title} />
                        </div>
                    </div>
                    <button 
                        onClick={next} 
                        className="btn btn-lg btn-outline"
                    >
                        {'>'}
                    </button>
                </div>
                : 
                ''
            }
            <div>
                <div className='d-flex align-items-center justify-content-between my-1 selection-container'>
                    {selectedArray.map((result, index) => {
                        return result?.image?.length
                                ?
                                <div className='p-2' key={result.id} onClick={() => setSelected(result)}>
                                    <img className='selection-img'  src={result.image} alt={result.title} />
                                </div>
                                :
                                ''
                        })
                    }
                </div>
            </div>
        </div>
    )
}