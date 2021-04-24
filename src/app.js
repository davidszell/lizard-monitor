import React from 'react';
import { render } from 'react-dom';

import Dashboard from './components/dashboard';

const App = (
    <main className="h-screen overflow-auto p-6 bg-gray-100 space-y-4">
        <Dashboard />
    </main>
);
render(App, document.getElementById('app'));