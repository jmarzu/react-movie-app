import React from 'react';

export default function SpinnerButton({ loading, title }) {
    return (
        <button className="btn btn-primary w-100" type='submit'>
            {
                loading === true ? 
                <span>
                    <span 
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Loading...
                </span>
                :
                <span>
                    {title}
                </span>
            }
        </button>
    )
}