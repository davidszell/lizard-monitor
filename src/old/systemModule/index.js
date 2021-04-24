import React from 'react';

import SystemData from '../dataTypes/systemData';

function SystemModule({systemData}) {
    const uptimeToReadable = (uptime) => {
        let seconds = uptime;
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds -= minutes * 60;
        minutes -= hours * 60;
        hours -= days * 24;

        let data = [];

        days && data.push(days + " days");
        hours && data.push(hours + " hours");
        minutes && data.push(minutes + " minutes");
        seconds && data.push(seconds + " seconds");

        return data.join(' ');
    }

	return (
        <div className="w-full">
            {systemData ? (
                <div className="shadow-lg rounded-md px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                    <p className="w-max text-xl text-gray-700 dark:text-white font-semibold border-b border-gray-200">System Information</p>
                    <div className="dark:text-white mt-6">
                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Hostname</span>
                            </div>
                            <div className="flex items-end">{systemData.hostname}</div>
                        </div>
                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Platform</span>
                            </div>
                            <div className="flex items-end">{systemData.platform}</div>
                        </div>
                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Release</span>
                            </div>
                            <div className="flex items-end">{systemData.release}</div>
                        </div>
                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Arch</span>
                            </div>
                            <div className="flex items-end">{systemData.arch}</div>
                        </div>
                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12 justify-between border-b border-gray-200">
                            <div>
                                <span>Uptime</span>
                            </div>
                            <div className="flex items-end">{uptimeToReadable(systemData.uptime)}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="shadow-lg rounded-md px-4 py-6 w-full h-64 bg-gray-300 relative animate-pulse" />
            )}
        </div>
	);
}

SystemModule.propTypes = {
    systemData : SystemData.isRequired
};

export default SystemModule;