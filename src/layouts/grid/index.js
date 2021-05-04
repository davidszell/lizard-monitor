import React from 'react';
import PropTypes from 'prop-types';

function Grid({children}) {
    return (
        <div className="space-y-4">
            {children}
        </div>
    );
}

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Grid;