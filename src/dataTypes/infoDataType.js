import PropTypes from 'prop-types';

const InfoDataType = PropTypes.shape({
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
});

export default InfoDataType;