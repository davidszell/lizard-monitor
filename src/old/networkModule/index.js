import React from 'react';

import NetworkData from '../dataTypes/networkData';

function NetworkModule({networkData}) {
	return (
        <div className="w-full">
            {networkData ? (
                <div className="shadow-lg rounded-md px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                    <p className="w-max text-xl text-gray-700 dark:text-white font-semibold border-b border-gray-200">Network</p>
                    <div className="dark:text-white mt-6">
                        {networkData.map((interfaceData, i) => (
                            <div key={i}>
                                <div className="pb-2 mb-2">
                                    <p>{interfaceData.name}</p>
                                    <span className="text-xs text-gray-400">{interfaceData.mac}</span>
                                </div>
                                {interfaceData.addresses.map((addressData, addressKey) => (
                                    <div key={addressKey} className="border-b border-gray-200">
                                        <div className="flex items-center mb-2 text-sm sm:space-x-12 justify-between">
                                            <div>
                                                <span>Address</span>
                                            </div>
                                            <div className="flex items-end">{addressData.address}</div>
                                        </div>
                                        <div className="flex items-center mb-2 text-sm sm:space-x-12 justify-between">
                                            <div>
                                                <span>Family</span>
                                            </div>
                                            <div className="flex items-end">{addressData.family}</div>
                                        </div>
                                        <div className="flex items-center mb-2 text-sm sm:space-x-12 justify-between">
                                            <div>
                                                <span>Mask</span>
                                            </div>
                                            <div className="flex items-end">{addressData.netmask}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="shadow-lg rounded-md px-4 py-6 w-full h-64 bg-gray-300 relative animate-pulse" />
            )}
        </div>
	);
}

NetworkModule.propTypes = {
    networkData : NetworkData.isRequired
};

export default NetworkModule;