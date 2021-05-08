import React from 'react';
import PropTypes from 'prop-types';

import SmallList from '../../../layouts/templates/smallList';
import MemoryIcon from '../../icons/memory';

function Details({values}) {

    const formatValuesFunc = (values) => {
        let displayValues = [];
        displayValues.push({name: 'Total', value: values.totalMiB + ' MiB'});
        displayValues.push({name: 'Free', value: values.freeMiB + ' MiB'});
        displayValues.push({name: 'Used', value: values.usedMiB + ' MiB'});
        return displayValues;
    };

	return (
        <SmallList
            title={'Memory details'}
            values={values}
            icon={MemoryIcon}
            formatValuesFunc={formatValuesFunc}
            className="bg-gradient-to-br from-yellow-300 to-red-400" />
	);
}

Details.propTypes = {
    values : PropTypes.object.isRequired
};

export default Details;