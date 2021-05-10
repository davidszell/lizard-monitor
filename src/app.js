import React from 'react';
import { render } from 'react-dom';
import { useEffect, useState } from 'react-dom';
import io from 'socket.io-client';

import Page from './layouts/page';
import Grid from './layouts/grid';
import GridRow from './layouts/grid-row';
import Greeting from './components/greeting';

import CpuAvgLoad from './components/cpu/avgLoad';
import CpuGraph from './components/cpu/graph';
import CpuCoreDetails from './components/cpu/coreDetails';
import MemoryInfo from './components/memory/info';
import MemoryDetails from './components/memory/details';
import MemoryGraph from './components/memory/graph';
import SystemUptime from './components/system/uptime';
import SystemDetails from './components/system/details';

function App() {
	const socket = io();

    let [cpuData, setCpuData] = useState(null);
    let [cpuDataLastUpdated, setCpuDataLastUpdated] = useState(null);
	let [memoryData, setMemoryData] = useState(null);
    let [memoryDataLastUpdated, setMemoryDataLastUpdated] = useState(null);
    let [systemData, setSystemData] = useState(null);

	useEffect(() => {
		socket.on('cpuInfo', (data) => {
			setCpuData(data);
            setCpuDataLastUpdated(new Date().getMilliseconds())
        });
		socket.on('memoryInfo', (data) => {
			setMemoryData(data);
            setMemoryDataLastUpdated(new Date().getMilliseconds())
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
                    <SystemUptime value={systemData?.uptime} />
                </GridRow>
                <GridRow>
                    <MemoryGraph value={memoryData?.usedPercent} lastUpdated={memoryDataLastUpdated} />
                    <MemoryDetails values={memoryData} />
                </GridRow>
                <GridRow>
                    <CpuGraph value={cpuData?.avgLoadPercent} lastUpdated={cpuDataLastUpdated} />
                    <CpuCoreDetails values={cpuData} />
                </GridRow>
                <GridRow>
                    <SystemDetails values={systemData} />
                </GridRow>
            </Grid>
        </Page>
    );
}

render((<App />), document.getElementById('app'));