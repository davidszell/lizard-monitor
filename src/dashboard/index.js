import React from 'react';
import { useEffect, useState} from 'react-dom';
import io from 'socket.io-client';

import CpuModule from '../cpuModule';
import MemoryModule from '../memoryModule';

function Dashboard() {
	const socket = io();

	let [cpuData, setCpuData] = useState(null);
	let [memoryData, setMemoryData] = useState(null);

	useEffect(() => {
		socket.on('cpuInfo', (data) => {
			setCpuData(data);
        });
		socket.on('memoryInfo', (data) => {
			setMemoryData(data);
        });
	}, []);

	return (
        <React.Fragment>
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">Good afternoon.</h1>
            <h2 className="text-md text-gray-400">Here&apos;s what&apos;s happening on HOSTNAME.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          		<CpuModule cpuData={cpuData} />
				<MemoryModule memoryData={memoryData} />
        	</div>
        </React.Fragment>
	);
}

export default Dashboard;