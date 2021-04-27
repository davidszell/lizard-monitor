import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

import SmallTemplate from '../../templates/smallTemplate';
import NoneIcon from '../../icons/none';

function Info({value}) {
    let [info, setInfo] = useState(null);

    useEffect(() => {
		if (value == undefined || value == null) {
            setInfo(null);
        } else {
            setInfo({name: 'Used', value: value + '%', icon: (<NoneIcon.Small />)});
        }
    }, [value]);

	return (
        <SmallTemplate title={'Memory'} info={info} loadingIcon={<NoneIcon.Large />} />
	);
}

Info.propTypes = {
    value : PropTypes.number.isRequired
};

export default Info;