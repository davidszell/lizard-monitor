import React from 'react';
import PropTypes from 'prop-types';

import CpuData from '../dataTypes/cpuData';

function CpuInfo({key, cpuData}) {
	return (
		<div key={key}>
			<span>CPU #{cpuData.cpu} - </span>
			<progress value={cpuData.loadPercent} max="100"> {cpuData.loadPercent}% </progress>
			<span> ({cpuData.loadPercent}%)</span>
		</div>
	);
}

CpuInfo.propTypes = {
    key : PropTypes.number.isRequired,
    cpuData : CpuData.isRequired
}

export default CpuInfo;