import PropTypes from 'prop-types';
import NetworkAddressData from './networkAddressData';

const NetworkInterfaceData = PropTypes.shape({
    name : PropTypes.string.isRequired,
    mac : PropTypes.string.isRequired,
    addresses : PropTypes.arrayOf(NetworkAddressData)
});

export default NetworkInterfaceData;