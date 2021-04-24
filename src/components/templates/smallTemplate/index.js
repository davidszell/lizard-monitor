import React from 'react';
import PropTypes from 'prop-types';

import InfoDataType from '../../../dataTypes/infoDataType';
import InfoTemplate from '../infoTemplate';

function SmallTemplate({title, info, loadingIcon}) {

    return (
        <React.Fragment>
            {info ? (
                <div className="shadow border rounded-sm overflow-hidden bg-white max-h-32 h-32">
                    <div className="flex items-center px-4 h-12">
                        <p className="text-xl text-gray-700 font-semibold">
                            {title}
                        </p>
                    </div>
                    <InfoTemplate info={info} />
                </div>
            ) : (
                <div
                className="shadow border rounded-sm overflow-hidden max-h-32 h-32 bg-gray-300 animate-pulse flex items-center justify-center text-white">
                {loadingIcon}
            </div>
            )}
        </React.Fragment>
    );
}

SmallTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    info: InfoDataType,
    loadingIcon: PropTypes.node.isRequired,
};

export default SmallTemplate;