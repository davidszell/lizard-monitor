import React from 'react';
import { useEffect, useState} from 'react-dom';
import io from 'socket.io-client';

import CpuModule from '../cpuModule';

function Dashboard() {
	const socket = io();

	let [cpuDataList, setCpuDataList] = useState([]);

	useEffect(() => {
		socket.on('info', (data) => {
			setCpuDataList(data);
            console.log(JSON.stringify(data));
        });
	}, []);

	return (
        <CpuModule cpuDataList={cpuDataList} />
	);
}

export default Dashboard;