import React from 'react';
import PropTypes from 'prop-types';

function GridRow({children}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {children}
        </div>
    );
}

GridRow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default GridRow;