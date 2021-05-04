import React from 'react';
import PropTypes from 'prop-types';

function Header({children}) {
    return (
        <main className="sm:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-0">
            <div className="space-y-8 py-4">
                {children}
            </div>
        </main>
    );
}

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Header;