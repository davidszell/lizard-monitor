import React from 'react';
import PropTypes from 'prop-types';

function SmallTemplate({title, value, icon, isLoading, className}) {
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
                                {value}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

SmallTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    className: PropTypes.string,
    isLoading: PropTypes.bool
};

export default SmallTemplate;