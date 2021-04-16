import PropTypes from 'prop-types';
import NetworkInterfaceData from './networkInterfaceData';

const NetworkData = PropTypes.arrayOf(NetworkInterfaceData).isRequired;

export default NetworkData;