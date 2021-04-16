import PropTypes from 'prop-types';

const SystemData = PropTypes.shape({
    arch : PropTypes.string.isRequired,
    hostname : PropTypes.string.isRequired,
    platform : PropTypes.string.isRequired,
    release : PropTypes.string.isRequired,
    uptime : PropTypes.number.isRequired
});

export default SystemData;