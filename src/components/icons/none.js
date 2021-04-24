import React from 'react';

function Small() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current w-7 h-7" viewBox="0 0 24 24">
            <path fill="none" strokeWidth="3"
                d="M6.343 17.657A8 8 0 1017.657 6.343L6.343 17.657A8 8 0 1117.657 6.343" />
        </svg>
    );
}

function Large() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current w-14 h-14" viewBox="0 0 24 24">
            <path fill="none" strokeWidth="3"
                d="M6.343 17.657A8 8 0 1017.657 6.343L6.343 17.657A8 8 0 1117.657 6.343" />
        </svg>
    );
}

export default {Small, Large};