import React from 'react';
import PropTypes from 'prop-types';

import MemoryIcon from '../../icons/memory';
import MediumGraph from '../../../layouts/templates/mediumGraph';

function Graph({value, lastUpdated}) {
	return (
        <MediumGraph title="Memory Usage (%)"
            icon={MemoryIcon}
            lastValue={value}
            lastUpdated={lastUpdated}
            className="bg-gradient-to-br from-yellow-300 to-red-400" />
	);
}

Graph.propTypes = {
    value : PropTypes.number.isRequired,
    lastUpdated : PropTypes.number.isRequired
};

export default Graph;