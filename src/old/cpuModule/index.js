import React from 'react';

import CpuInfo from '../cpuInfo';
import CpuData from '../dataTypes/cpuData';

function CpuModule({cpuData}) {
	return (
        <div className="w-full">
            {cpuData ? (
                <div className="shadow-lg rounded-md px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                    <p className="w-max text-xl text-gray-700 dark:text-white font-semibold border-b border-gray-200">CPU</p>
                    <div className="space-y-2 my-6">
                        <p className="text-5xl text-black dark:text-white font-bold">{cpuData.avgLoadPercent}%</p>
                    </div>
                    <div className="dark:text-white">
                        {cpuData.coreData.map((cpuData, i) => (
                            <CpuInfo key={i} cpuData={cpuData} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="shadow-lg rounded-md px-4 py-6 w-full h-64 bg-gray-300 relative animate-pulse" />
            )}
        </div>
	);
}

CpuModule.propTypes = {
    cpuData : CpuData.isRequired
};

export default CpuModule;