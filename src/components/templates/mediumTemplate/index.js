import React from 'react';
import PropTypes from 'prop-types';

import InfoDataType from '../../../dataTypes/infoDataType';
import InfoTemplate from '../infoTemplate';

function MediumTemplate({title, infoList, loadingIcon}) {

    return (
        <React.Fragment>
            {infoList ? (
                <div className="shadow border rounded-sm overflow-hidden bg-white max-h-68 h-68 row-span-2">
                    <div className="flex items-center px-4 h-12">
                        <p className="text-xl text-gray-700 font-semibold">
                            {title}
                        </p>
                    </div>
                    <div className="space-y-2 h-56 max-h-56 overflow-y-auto pb-4">
                        {infoList.map((value, index) => (
                            <InfoTemplate key={index} info={value} />
                        ))}
                    </div>
                </div>
            ) : (
                <div
                className="shadow border rounded-sm overflow-hidden max-h-68 h-68 row-span-2 bg-gray-300 animate-pulse flex items-center justify-center text-white">
                {loadingIcon}
            </div>
            )}
        </React.Fragment>
    );
}

MediumTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(InfoDataType),
    loadingIcon: PropTypes.node.isRequired,
};

export default MediumTemplate;