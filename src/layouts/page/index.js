import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Container from '../container';

function Page({appName, children}) {
    return (
        <div className="h-screen overflow-auto bg-gray-200">
            <Header title={appName} />
            <Container>
                {children}
            </Container>
        </div>
    );
}

Page.propTypes = {
    appName: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Page;