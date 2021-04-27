import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

import SmallTemplate from '../../templates/smallTemplate';
import NoneIcon from '../../icons/none';

function AvgLoad({value}) {
    let [info, setInfo] = useState(null);

    useEffect(() => {
		if (value == undefined || value == null) {
            setInfo(null);
        } else {
            setInfo({name: 'Avg Load', value: value + '%', icon: (<NoneIcon.Small />)});
        }
    }, [value]);

	return (
        <SmallTemplate title={'CPU'} info={info} loadingIcon={<NoneIcon.Large />} />
	);
}

AvgLoad.propTypes = {
    value : PropTypes.number.isRequired
};

export default AvgLoad;