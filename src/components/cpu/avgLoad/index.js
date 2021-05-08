import React from 'react';
import PropTypes from 'prop-types';

import SmallCard from '../../../layouts/templates/smallCard';
import CpuIcon from '../../icons/cpu';

function AvgLoad({value}) {

    const formatValueFunc = (value) => {
        return value + '%';
    };

	return (
        <SmallCard
            title={'CPU Load'}
            value={value}
            icon={<CpuIcon />}
            formatValueFunc={formatValueFunc}
            className="bg-gradient-to-br from-green-300 to-blue-400" />
	);
}

AvgLoad.propTypes = {
    value : PropTypes.number.isRequired
};

export default AvgLoad;