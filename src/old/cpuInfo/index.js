import React from 'react';
import PropTypes from 'prop-types';

import CpuData from '../dataTypes/cpuData';

function CpuInfo({cpuData}) {
	return (
        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
            <div>
                <span>CPU #{cpuData.cpu}</span>
                <span className="text-xs text-gray-400 px-4">{cpuData.model}</span>
            </div>
            <div className="flex items-end">{cpuData.loadPercent}%</div>
        </div>
	);
}

CpuInfo.propTypes = {
    key : PropTypes.number.isRequired,
    cpuData : CpuData.isRequired
}

export default CpuInfo;