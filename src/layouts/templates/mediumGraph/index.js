import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

function MediumGraph({title, icon, lastValue, lastUpdated, className}) {
    let [values, setValues] = useState(Array(31).fill(0));
    let [displayValue, setDisplayValue] = useState("");

    useEffect(() => {
        if (lastValue != null && lastValue != undefined) {
            setValues( arr => [...arr.slice(-30), lastValue]);
        }
    }, [lastValue, lastUpdated]);
    
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
        <div className="lg:col-span-2 text">
            <div className={"relative shadow rounded-sm overflow-hidden text-white " + (className || "")}>
                <div className="absolute -bottom-8 -right-8 opacity-20">
                    {icon('lg')}
                </div>
                <div className="relative">
                    <div className="flex items-center px-4 h-12">
                        <p className="text-sm uppercase font-semibold">
                            {title}
                        </p>
                    </div>
                    <div className="p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current fill-current" viewBox="-30 -10 330 120">
                            <path fill="none" d="M0,-5L0,105L300,105" />
                            <path fill="none" strokeDasharray="3,3" d="M0,0L300,0M0,25L300,25M0,50L300,50M0,75L300,75M0,100L300,100" />
                            <text x="-5" y="0" textAnchor="end" dominantBaseline="central" stroke="none" className="text-2xs">
                                100%
                            </text>
                            <text x="-5" y="25" textAnchor="end" dominantBaseline="central" stroke="none" className="text text-2xs">
                                75%
                            </text>
                            <text x="-5" y="50" textAnchor="end" dominantBaseline="central" stroke="none" className="text-2xs">
                                50%
                            </text>
                            <text x="-5" y="75" textAnchor="end" dominantBaseline="central" stroke="none" className="text-2xs">
                                25%
                            </text>
                            <text x="-5" y="100" textAnchor="end" dominantBaseline="central" stroke="none" className="text-2xs">
                                0%
                            </text>
                            <path fill="none" strokeWidth="2" d={displayValue} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
	);
}

MediumGraph.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    lastValue: PropTypes.number.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    className: PropTypes.string
};

export default MediumGraph;