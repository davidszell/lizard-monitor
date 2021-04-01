import PropTypes from 'prop-types';
import CoreData from './coreData';

const CpuData = PropTypes.shape({
    avgLoad : PropTypes.number.isRequired,
    coreData : PropTypes.arrayOf(CoreData).isRequired
});

export default CpuData;