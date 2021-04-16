import React from 'react';
import { useEffect, useState} from 'react-dom';
import io from 'socket.io-client';

import CpuModule from '../cpuModule';
import MemoryModule from '../memoryModule';
import NetworkModule from '../networkModule';
import SystemModule from '../systemModule';

function Dashboard() {
	const socket = io();

	let [cpuData, setCpuData] = useState(null);
	let [networkData, setNetworkData] = useState(null);
	let [memoryData, setMemoryData] = useState(null);
	let [systemData, setSystemData] = useState(null);
	let [hostname, setHostname] = useState(null);
	let [greeting, setGreeting] = useState(null);

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
		socket.on('networkInfo', (data) => {
			setNetworkData(data);
        });
		socket.on('systemInfo', (data) => {
			setSystemData(data);
        });

		fetch('/api/system/info')
			.then((res) => res.json())
			.then(
				(result) => setHostname(result.hostname),
				() => {setHostname(null)}
			);

		updateGreeting();
		setInterval(updateGreeting, 5 * 60 * 1000);
	}, []);


	return (
        <React.Fragment>
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
				Good {greeting || 'day'}.
			</h1>
			{hostname && (
				<h2 className="text-md text-gray-400">Here&apos;s what&apos;s happening on {hostname}.</h2>
			)}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          		<SystemModule systemData={systemData} />
          		<CpuModule cpuData={cpuData} />
				<MemoryModule memoryData={memoryData} />
				<NetworkModule networkData={networkData} />
        	</div>
        </React.Fragment>
	);
}

export default Dashboard;