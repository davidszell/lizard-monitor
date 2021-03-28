import React from 'react';
import { render, useEffect, useState} from 'react-dom';
import io from 'socket.io-client';

function Dashboard(props) {
	const socket = io();

	let [cpus, setCpus] = useState([]);

	useEffect(() => {
		socket.on('info', (data) => {
			setCpus(data);
            console.log(JSON.stringify(data));
        });
	}, []);

	return (
		<React.Fragment>
			{cpus.map(cpu => (
				<div>
					<span>CPU #{cpu.cpu + 1} - </span>
					<progress value={cpu.loadPercent} max="100"> {cpu.loadPercent}% </progress>
					<span> ({cpu.loadPercent}%)</span>
				</div>
			))}
		</React.Fragment>
		
	);
}
  
const App = <Dashboard name="World" />;
render(App, document.getElementById('app'));  