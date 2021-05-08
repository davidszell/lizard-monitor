import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

import MemoryIcon from '../../icons/memory';

function Graph({value, lastUpdated}) {
    let [values, setValues] = useState([]);
    let [displayValue, setDisplayValue] = useState("");

    useEffect(() => {
        if (value != null && value != undefined) {
            setValues( arr => [...arr.slice(-30), value]);
        }
        let d = "";
        values.map((value, i) => {
            if (i == 0) {
                d = 'M' + i * 10 + ',' + (100 - value); 
            } else {
                d += 'L' + i * 10 + ',' + (100 - value); 
            }
        });
        setDisplayValue(d);
    }, [value, lastUpdated]);
    
    useEffect(() => {
        let d = "";
        values.map((value, i) => {
            if (i == 0) {
                d = 'M0,' + (100 - value); 
            } else {
                d += 'L' + (i * 10) + ',' + (100 - value); 
            }
        });
        setDisplayValue(d);
    }, [values]);

	return (
        <div className="col-span-2">
            <div className={"relative shadow rounded-sm overflow-hidden text-white bg-gradient-to-br from-yellow-300 to-red-400"}>
                <div className="absolute -bottom-8 -right-8 opacity-20">
                    {MemoryIcon('lg')}
                </div>
                <div className="relative">
                    <div className="flex items-center px-4 h-12">
                        <p className="text-sm uppercase font-semibold">
                            Memory Usage
                        </p>
                    </div>
                    <div className="p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current" strokeWidth="2" viewBox="0 0 300 100">
                            <path fill="none" d="M0,0L0,100L300,100" />
                            <path fill="none" d={displayValue} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
	);
}

Graph.propTypes = {
    value : PropTypes.number.isRequired,
    lastUpdated : PropTypes.number.isRequired
};

export default Graph;