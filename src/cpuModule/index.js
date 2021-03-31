import React from 'react';
import PropTypes from 'prop-types';

import CpuInfo from '../cpuInfo';
import CpuData from '../dataTypes/cpuData';

function CpuModule({cpuDataList}) {
	return (
		<React.Fragment>
			{cpuDataList && cpuDataList.map((cpuData, i) => (
                <CpuInfo key={i} cpuData={cpuData} />
			))}
		</React.Fragment>
	);
}

CpuModule.propTypes = {
    cpuDataList : PropTypes.arrayOf(CpuData)
};

export default CpuModule;