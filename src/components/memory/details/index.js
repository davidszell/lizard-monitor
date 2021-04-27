import React from 'react';
import { useEffect, useState } from 'react-dom';

import MediumTemplate from '../../templates/mediumTemplate';
import NoneIcon from '../../icons/none';
import MemoryInfoDataType from '../../../dataTypes/memoryInfoDataType';

function MemoryDetails({value}) {
    let [infoList, setInfoList] = useState(null);

    useEffect(() => {
		if (value == undefined || value == null) {
            setInfoList(null);
        } else {
            let memoryInfo = [];

            memoryInfo.push({name: 'Total', value: value.totalMiB + ' MiB', icon: (<NoneIcon.Small />)});
            memoryInfo.push({name: 'Free ', value: value.freeMiB + ' MiB', icon: (<NoneIcon.Small />)});
            memoryInfo.push({name: 'Used', value: value.usedMiB + ' MiB', icon: (<NoneIcon.Small />)});

            setInfoList(memoryInfo);
        }
    }, [value]);

	return (
        <MediumTemplate title={'Memory Details'} infoList={infoList} loadingIcon={<NoneIcon.Large />} />
	);
}

MemoryDetails.propTypes = {
    value : MemoryInfoDataType
};

export default MemoryDetails;