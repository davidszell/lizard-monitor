import React from 'react';
import PropTypes from 'prop-types';

import SmallCard from '../../../layouts/templates/smallCard';
import ClockIcon from '../../icons/clock';

function Uptime({value}) {

    const formatValueFunc = (value) => {
        let seconds = value;
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds -= minutes * 60;
        minutes -= hours * 60;
        hours -= days * 24;

        let data = [];
        data.push(days.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        data.push(hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        data.push(minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        data.push(seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));

        return data.join(':');
    };

	return (
        <SmallCard
            title={'Uptime'}
            value={value}
            icon={ClockIcon}
            formatValueFunc={formatValueFunc}
            className="bg-gradient-to-br from-blue-300 to-indigo-400" />
	);
}

Uptime.propTypes = {
    value : PropTypes.number.isRequired
};

export default Uptime;