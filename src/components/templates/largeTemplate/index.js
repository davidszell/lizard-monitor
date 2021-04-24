import React from 'react';
import PropTypes from 'prop-types';

import InfoDataType from '../../../dataTypes/infoDataType';
import InfoTemplate from '../infoTemplate';

function LargeTemplate({title, infoList, loadingIcon}) {

    return (
        <React.Fragment>
            {infoList ? (
                <div className="shadow border rounded-sm overflow-hidden bg-white max-h-104 h-104 row-span-3">
                    <div className="flex items-center px-4 h-12">
                        <p className="text-xl text-gray-700 font-semibold">
                            {title}
                        </p>
                    </div>
                    <div className="space-y-2 h-92 max-h-92 overflow-y-auto pb-4">
                        {infoList.map((value, index) => (
                            <InfoTemplate key={index} info={value} />
                        ))}
                    </div>
                </div>
            ) : (
                <div
                className="shadow border rounded-sm overflow-hidden max-h-104 h-104 row-span-3 bg-gray-300 animate-pulse flex items-center justify-center text-white">
                {loadingIcon}
            </div>
            )}
        </React.Fragment>
    );
}

LargeTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(InfoDataType),
    loadingIcon: PropTypes.node.isRequired,
};

export default LargeTemplate;