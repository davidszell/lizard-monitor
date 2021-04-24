import React from 'react';

import InfoDataType from '../../../dataTypes/infoDataType';

function InfoTemplate({ info }) {

    return (
        <React.Fragment>
            <div className="flex items-center space-x-4 px-4 h-16 max-h-16">
                <div className="flex items-center p-3 bg-gradient-to-b from-gray-400 to-gray-500 text-white rounded-lg">
                    {info.icon}
                </div>
                <div>
                    <p className="text-gray-500 font-semibold">{info.name}</p>
                    <h2 className="text-2xl font-semibold text-gray-700">
                        {info.value}
                    </h2>
                </div>
            </div>
        </React.Fragment>
    );
}

InfoTemplate.propTypes = {
    info: InfoDataType.isRequired
};

export default InfoTemplate;