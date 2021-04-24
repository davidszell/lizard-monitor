import PropTypes from 'prop-types';

const NetworkAddressData = PropTypes.shape({
    address : PropTypes.string.isRequired,
    family : PropTypes.string.isRequired,
    netmask : PropTypes.string.isRequired
});

export default NetworkAddressData;