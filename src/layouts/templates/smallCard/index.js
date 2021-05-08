import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

function SmallCard({title, value, icon, formatValueFunc, className}) {
    let [isLoading, setLoading] = useState(true);
    let [displayValue, setDisplayValue] = useState(null);

    useEffect(() => {
		if (value == undefined || value == null) {
            setLoading(true);
            setDisplayValue(null);
        } else {
            setLoading(false);
            setDisplayValue(formatValueFunc(value));
        }
    }, [value]);

    return (
        <React.Fragment>
            {isLoading ? (
                <div className="relative shadow-md rounded-sm overflow-hidden max-h-32 h-32 text-white animate-pulse bg-gradient-to-br from-gray-300 to-gray-400">
                    <div className="absolute -bottom-8 -right-8 opacity-20">
                        {icon}
                    </div>
                </div>
            ) : (
                <div className={"relative shadow rounded-sm overflow-hidden max-h-32 h-32 text-white " + (className ? className : "")}>
                    <div className="absolute -bottom-8 -right-8 opacity-20">
                        {icon}
                    </div>
                    <div className="relative">
                        <div className="flex items-center px-4 h-12">
                            <p className="text-sm uppercase font-semibold">
                                {title}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 px-4 h-16 max-h-16">
                            <h2 className="text-2xl font-semibold">
                                {displayValue}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

SmallCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    formatValueFunc: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default SmallCard;