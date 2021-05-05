import React from 'react';
import PropTypes from 'prop-types';

function Header({title}) {
    return (
        <header className="bg-blue-400 p-4 text-white text-xl shadow">
            {title}
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;