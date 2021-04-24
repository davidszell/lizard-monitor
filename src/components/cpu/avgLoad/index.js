import React from 'react';
import PropTypes from 'prop-types';

import SmallTemplate from '../../templates/smallTemplate';
import NoneIcon from '../../icons/none';

function CpuModule({avgLoad}) {
    const info = {name: 'Avg Load', value: avgLoad + '%', icon: (<NoneIcon.Small />)}

	return (
        <SmallTemplate title={'CPU'} info={info} loadingIcon={<NoneIcon.Large />} />
	);
}

CpuModule.propTypes = {
    avgLoad : PropTypes.number.isRequired
};

export default CpuModule;