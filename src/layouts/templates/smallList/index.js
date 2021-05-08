import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

function SmallCard({title, values, icon, formatValuesFunc, className}) {
    let [isLoading, setLoading] = useState(true);
    let [displayValues, setDisplayValues] = useState(null);

    useEffect(() => {
		if (values == undefined || values == null) {
            setLoading(true);
            setDisplayValues(null);
        } else {
            setLoading(false);
            setDisplayValues(formatValuesFunc(values));
        }
    }, [values]);

    return (
        <React.Fragment>
            {isLoading ? (
                <div className="relative shadow-md rounded-sm overflow-hidden max-h-32 h-32 text-white animate-pulse bg-gradient-to-br from-gray-300 to-gray-400">
                    <div className="absolute -bottom-8 -right-8 opacity-20">
                        {icon('lg')}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="shadow-md rounded-sm overflow-hidden text-white">
                        <div className={"relative flex items-center px-4 h-12 overflow-hidden " + (className ? className : "")}>
                            <div className="absolute -bottom-3 -right-3 opacity-20">
                                {icon('sm')}
                            </div>
                            <p className="text-sm uppercase font-semibold">
                                {title}
                            </p>
                        </div>
                        <div>
                            {displayValues.map((displayValue,i) => (
                                <div key={i}>
                                    <div className="flex items-end px-4 h-8">
                                        <p className="text-xs uppercase font-semibold text-gray-700">
                                            {displayValue.name}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-4 px-4 h-10 max-h-10">
                                        <h2 className="text-xl font-semibold text-gray-800 justify-end">
                                            {displayValue.value}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

SmallCard.propTypes = {
    title: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    icon: PropTypes.func.isRequired,
    formatValuesFunc: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default SmallCard;