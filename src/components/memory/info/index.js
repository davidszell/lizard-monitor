import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

import SmallTemplate from '../../../layouts/templates/smallTemplate';
import NoneIcon from '../../icons/none';

function Info({value}) {
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
            title={'Memory (used)'}
            value={displayValue}
            icon={<NoneIcon />}
            isLoading={isLoading}
            className="bg-gradient-to-br from-yellow-300 to-red-400" />
	);
}

Info.propTypes = {
    value : PropTypes.number.isRequired
};

export default Info;