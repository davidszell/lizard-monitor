import React from 'react';

import MemoryData from '../dataTypes/memoryData';

function MemoryModule({memoryData}) {
	return (
        <div className="w-full">
            {memoryData ? (
                <div className="shadow-lg rounded-md px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                    <p className="w-max text-xl text-gray-700 dark:text-white font-semibold border-b border-gray-200">Memory</p>
                    <div className="space-y-2 my-6">
                        <p className="text-5xl text-black dark:text-white font-bold">{memoryData.usedPercent}%</p>
                    </div>
                    <div className="dark:text-white">
                    <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Total</span>
                            </div>
                            <div className="flex items-end">{memoryData.totalMiB} MiB</div>
                        </div>
                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Free</span>
                            </div>
                            <div className="flex items-end">{memoryData.freeMiB} MiB</div>
                        </div>
                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Used</span>
                            </div>
                            <div className="flex items-end">{memoryData.usedMiB} MiB</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="shadow-lg rounded-md px-4 py-6 w-full h-64 bg-gray-300 relative animate-pulse" />
            )}
        </div>
	);
}

MemoryModule.propTypes = {
    memoryData : MemoryData.isRequired
};

export default MemoryModule;