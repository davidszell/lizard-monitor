import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types'

function Greeting({hostname}) {
    let [greeting, setGreeting] = useState(null);

    const updateGreeting = () => {
        const hours = new Date().getHours();
        setGreeting(hours < 5 && "evening" ||
            hours < 12 && "morning" ||
            hours < 18 && "afternoon" ||
            "evening");
    }

    useEffect(() => {
		updateGreeting();
        setInterval(updateGreeting, 5 * 60 * 1000);
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-semibold text-gray-800">
                Good {greeting || 'day'}.
            </h1>
            {hostname && (
                <h2 className="text-xl text-gray-700">
                    Here&apos;s what&apos;s happening on {hostname}.
                </h2>
            )}
        </div>
    );
}

Greeting.propTypes = {
    hostname: PropTypes.string.isRequired
}

export default Greeting;