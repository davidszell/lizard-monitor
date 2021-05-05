import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

import SmallTemplate from '../../../layouts/templates/smallTemplate';
import ClockIcon from '../../icons/clock';

function Uptime({value}) {
    let [isLoading, setLoading] = useState(true);
    let [displayValue, setDisplayValue] = useState(null);

    useEffect(() => {
		if (value == undefined || value == null) {
            setLoading(true);
            setDisplayValue(null);
        } else {
            setLoading(false);
            let seconds = value;
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);

            seconds -= minutes * 60;
            minutes -= hours * 60;
            hours -= days * 24;

            let data = [];
            data.push(days);
            data.push(hours);
            data.push(minutes);
            data.push(seconds);

            setDisplayValue(data.join(':'));
        }
    }, [value]);

	return (
        <SmallTemplate
            title={'Uptime'}
            value={displayValue}
            icon={<ClockIcon />}
            isLoading={isLoading}
            className="bg-gradient-to-br from-blue-300 to-indigo-400" />
	);
}

Uptime.propTypes = {
    value : PropTypes.number.isRequired
};

export default Uptime;