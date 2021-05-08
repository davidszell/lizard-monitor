import React from 'react';
import PropTypes from 'prop-types';

function NoneIcon(size) {
    if (size === 'sm') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current w-12 h-12" viewBox="0 0 24 24">
                <path fill="none" strokeWidth="3" d="M6.343 17.657A8 8 0 1017.657 6.343L6.343 17.657A8 8 0 1117.657 6.343" />
            </svg>
        );
    } else if (size === 'lg') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current w-32 h-32" viewBox="0 0 24 24">
                <path fill="none" strokeWidth="3" d="M6.343 17.657A8 8 0 1017.657 6.343L6.343 17.657A8 8 0 1117.657 6.343" />
            </svg>
        )
    }
    
}

NoneIcon.propTypes = {
    size: PropTypes.oneOf(['sm', 'lg']).isRequired
};

export default NoneIcon;