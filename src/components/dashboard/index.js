import React from 'react';
import { useEffect, useState } from 'react-dom';

import CpuAvgLoad from '../cpu/avgLoad';

function Dashboard() {
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
                <CpuAvgLoad avgLoad={'12.3'} />
            </div>
        </React.Fragment>
    );
}

export default Dashboard;