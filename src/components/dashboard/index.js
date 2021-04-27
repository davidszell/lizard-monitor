import React from 'react';
import { useEffect, useState } from 'react-dom';
import io from 'socket.io-client';

import CpuAvgLoad from '../cpu/avgLoad';
import CpuCoreInfo from '../cpu/coreInfo';
import MemoryInfo from '../memory/info';
import MemoryDetails from '../memory/details';

function Dashboard() {
	const socket = io();

    let [hostname, setHostname] = useState(null);
    let [greeting, setGreeting] = useState(null);

	let [cpuData, setCpuData] = useState(null);
	let [memoryData, setMemoryData] = useState(null);

    const updateGreeting = () => {
        const hours = new Date().getHours();
        setGreeting(hours < 5 && "evening" ||
            hours < 12 && "morning" ||
            hours < 18 && "afternoon" ||
            "evening");
    }

    useEffect(() => {
		socket.on('cpuInfo', (data) => {
			setCpuData(data);
        });
		socket.on('memoryInfo', (data) => {
			setMemoryData(data);
        });

        fetch('/api/system/info')
            .then((res) => res.json())
            .then(
                (result) => setHostname(result.hostname),
                () => { setHostname(null) }
            );

        updateGreeting();
        setInterval(updateGreeting, 5 * 60 * 1000);
    }, []);

    return (
        <React.Fragment>
            <h1 className="text-3xl font-semibold text-gray-800">
                Good {greeting || 'day'}.
            </h1>
            {hostname && (
                <h2 className="text-xl text-gray-400">
                    Here&apos;s what&apos;s happening on {hostname}.
                </h2>
            )}
            <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                <CpuAvgLoad value={cpuData?.avgLoadPercent} />
                <CpuCoreInfo value={cpuData?.coreData} compact={true} />
                <CpuCoreInfo value={cpuData?.coreData} />

                <MemoryInfo value={memoryData?.usedPercent} />
                <MemoryDetails value={memoryData} />
            </div>
        </React.Fragment>
    );
}

export default Dashboard;