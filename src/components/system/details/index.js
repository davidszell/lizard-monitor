import React from 'react';
import PropTypes from 'prop-types';

import SmallList from '../../../layouts/templates/smallList';
import SystemIcon from '../../icons/system';

function Details({values}) {

    const formatValuesFunc = (values) => {
        let displayValues = [];
        displayValues.push({name: 'Hostname', value: values.hostname});
        displayValues.push({name: 'Platform', value: values.platform});
        displayValues.push({name: 'Release', value: values.release});
        displayValues.push({name: 'Arch', value: values.arch});
        return displayValues;
    };

	return (
        <SmallList
            title={'System details'}
            values={values}
            icon={SystemIcon}
            formatValuesFunc={formatValuesFunc}
            className="bg-gradient-to-br from-blue-300 to-indigo-400" />
	);
}

Details.propTypes = {
    values : PropTypes.object.isRequired
};

export default Details;