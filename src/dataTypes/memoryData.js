import PropTypes from 'prop-types';

const MemoryData = PropTypes.shape({
    totalMiB: PropTypes.number.isRequired,
    freeMiB: PropTypes.number.isRequired,
    usedMiB: PropTypes.number.isRequired,
    usedPercent: PropTypes.number.isRequired
});

export default MemoryData;