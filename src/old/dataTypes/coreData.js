import PropTypes from 'prop-types';

const CoreData = PropTypes.shape({
    cpu : PropTypes.number.isRequired,
    model : PropTypes.string.isRequired,
    loadPercent : PropTypes.number.isRequired
});

export default CoreData;