import React from 'react';
import PropTypes from 'prop-types';

function ClockIcon(size) {
    if (size === 'sm') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current fill-current w-12 h-12" viewBox="0 0 24 24">
                <path fill="none" strokeWidth="2" d="M4 12a8 8 90 0116 0 8 8 90 01-16 0m8-6v6h6" />
            </svg>
        );
    } else if (size === 'lg') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current fill-current w-32 h-32" viewBox="0 0 24 24">
                <path fill="none" strokeWidth="2" d="M4 12a8 8 90 0116 0 8 8 90 01-16 0m8-6v6h6" />
            </svg>
        )
    }
}

ClockIcon.propTypes = {
    size: PropTypes.oneOf(['sm', 'lg']).isRequired
};

export default ClockIcon;