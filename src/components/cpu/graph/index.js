import React from 'react';
import PropTypes from 'prop-types';

import CpuIcon from '../../icons/cpu';
import MediumGraph from '../../../layouts/templates/mediumGraph';

function Graph({value, lastUpdated}) {
	return (
        <MediumGraph title="CPU Load"
            icon={CpuIcon}
            lastValue={value}
            lastUpdated={lastUpdated}
            className="bg-gradient-to-br from-green-300 to-blue-400" />
	);
}

Graph.propTypes = {
    value : PropTypes.number.isRequired,
    lastUpdated : PropTypes.number.isRequired
};

export default Graph;