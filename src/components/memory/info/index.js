import React from 'react';
import PropTypes from 'prop-types';

import SmallCard from '../../../layouts/templates/smallCard';
import MemoryIcon from '../../icons/memory';

function Info({value}) {

    const formatValueFunc = (value) => {
        return value + '%';
    };

	return (
        <SmallCard
            title={'Memory (used)'}
            value={value}
            icon={<MemoryIcon />}
            formatValueFunc={formatValueFunc}
            className="bg-gradient-to-br from-yellow-300 to-red-400" />
	);
}

Info.propTypes = {
    value : PropTypes.number.isRequired
};

export default Info;