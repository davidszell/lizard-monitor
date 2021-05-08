import React from 'react';
import PropTypes from 'prop-types';

function MemoryIcon(size) {
    if (size === 'sm') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current fill-current w-12 h-12" viewBox="0 0 24 24">
                <path fill="none" strokeWidth="2" d="M17 6v12a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2m4 0h-4m4 4h-4m4 4h-4m4 4h-4M3 6h4m-4 4h4m-4 4h4m-4 4h4"/>
            </svg>
        );
    } else if (size === 'lg') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current fill-current w-32 h-32" viewBox="0 0 24 24">
                <path fill="none" strokeWidth="2" d="M17 6v12a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2m4 0h-4m4 4h-4m4 4h-4m4 4h-4M3 6h4m-4 4h4m-4 4h4m-4 4h4"/>
            </svg>
        )
    }
}

MemoryIcon.propTypes = {
    size: PropTypes.oneOf(['sm', 'lg']).isRequired
};

export default MemoryIcon;