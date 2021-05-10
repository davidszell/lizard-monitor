import React from 'react';
import PropTypes from 'prop-types';

function NoneIcon(size) {
    if (size === 'sm') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-12 h-12" viewBox="0 0 24 24">
                <path stroke="none" d="M6 3l3 3a5 5 0 01-3 3L3 6a5 5 0 006 6l9 9a2 2 180 003-3l-9-9a5 5 0 00-6-6"/>
            </svg>
        );
    } else if (size === 'lg') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-32 h-32" viewBox="0 0 24 24">
                <path stroke="none" d="M6 3l3 3a5 5 0 01-3 3L3 6a5 5 0 006 6l9 9a2 2 180 003-3l-9-9a5 5 0 00-6-6"/>
            </svg>
        )
    }
    
}

NoneIcon.propTypes = {
    size: PropTypes.oneOf(['sm', 'lg']).isRequired
};

export default NoneIcon;