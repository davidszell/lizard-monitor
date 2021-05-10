import React from 'react';
import PropTypes from 'prop-types';

import SmallList from '../../../layouts/templates/smallList';
import CpuIcon from '../../icons/cpu';

function CoreDetails({values}) {

    const formatValuesFunc = (values) => {
        let displayValues = [];
        values?.coreData.map((value) => {
            displayValues.push({name: 'CPU ' + value.cpu, value: value.loadPercent + '%'});
        });
        return displayValues;
    };

	return (
        <SmallList
            title={'CPU cores'}
            values={values}
            icon={CpuIcon}
            formatValuesFunc={formatValuesFunc}
            className="bg-gradient-to-br from-green-300 to-blue-400" />
	);
}

CoreDetails.propTypes = {
    values : PropTypes.object.isRequired
};

export default CoreDetails;