import React from 'react';
import { useEffect, useState } from 'react-dom';
import PropTypes from 'prop-types';

import LargeTemplate from '../../templates/largeTemplate';
import MediumTemplate from '../../templates/mediumTemplate';
import NoneIcon from '../../icons/none';
import CoreInfoDataType from '../../../dataTypes/coreInfoDataType';

function CoreInfo({value, compact}) {
    let [infoList, setInfoList] = useState(null);

    useEffect(() => {
		if (value == undefined || value == null) {
            setInfoList(null);
        } else {
            setInfoList(value.map(item => {
                return {name: 'CPU ' + item.cpu, value: item.loadPercent + '%', icon: (<NoneIcon.Small />)}
            }));
        }
    }, [value]);

	return (
        <React.Fragment>
            {compact ? (
                <MediumTemplate title={'CPU Cores'} infoList={infoList} loadingIcon={<NoneIcon.Large />} />
            ) : (
                <LargeTemplate title={'CPU Cores'} infoList={infoList} loadingIcon={<NoneIcon.Large />} />
            )}
        </React.Fragment>
	);
}

CoreInfo.propTypes = {
    value : PropTypes.arrayOf(CoreInfoDataType),
    compact : PropTypes.bool
};

export default CoreInfo;