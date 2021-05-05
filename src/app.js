import React from 'react';
import { render } from 'react-dom';
import { useEffect, useState } from 'react-dom';
import io from 'socket.io-client';

import Page from './layouts/page';
import Grid from './layouts/grid';
import GridRow from './layouts/grid-row';
import Greeting from './components/greeting';

import CpuAvgLoad from './components/cpu/avgLoad';
import MemoryInfo from './components/memory/info';
import Uptime from './components/system/uptime';

function App() {
	const socket = io();

    let [cpuData, setCpuData] = useState(null);
	let [memoryData, setMemoryData] = useState(null);
    let [systemData, setSystemData] = useState(null);

	useEffect(() => {
		socket.on('cpuInfo', (data) => {
			setCpuData(data);
        });
		socket.on('memoryInfo', (data) => {
			setMemoryData(data);
        });
		socket.on('systemInfo', (data) => {
			setSystemData(data);
        });

		fetch('/api/system/info')
			.then((res) => res.json())
			.then(
				(result) => setSystemData(result)
			);
	}, []);

    return (
        <Page appName={"Lizard Monitor"}>
            <Greeting hostname={systemData?.hostname} />
            <Grid>
                <GridRow>
                    <CpuAvgLoad value={cpuData?.avgLoadPercent} />
                    <MemoryInfo value={memoryData?.usedPercent} />
                    <Uptime value={systemData?.uptime} />
                </GridRow>
            </Grid>
        </Page>
    );
}

render((<App />), document.getElementById('app'));