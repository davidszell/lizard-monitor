import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

import SmallTemplate from '../../../layouts/templates/smallTemplate';
import CpuIcon from '../../icons/cpu';

function AvgLoad({value}) {
    let [isLoading, setLoading] = useState(true);
    let [displayValue, setDisplayValue] = useState(null);

    useEffect(() => {
		if (value == undefined || value == null) {
            setLoading(true);
            setDisplayValue(null);
        } else {
            setLoading(false);
            setDisplayValue(value + '%');
        }
    }, [value]);

	return (
        <SmallTemplate
            title={'CPU Load'}
            value={displayValue}
            icon={<CpuIcon />}
            isLoading={isLoading}
            className="bg-gradient-to-br from-green-300 to-blue-400" />
	);
}

AvgLoad.propTypes = {
    value : PropTypes.number.isRequired
};

export default AvgLoad;