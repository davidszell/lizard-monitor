import React from 'react';
import { render } from 'react-dom';

import Dashboard from './dashboard';

const App = (
	<main className="bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden py-6">
		<div className="flex items-start justify-between">
			<div className="flex flex-col w-full md:space-y-4">
				<div className="overflow-auto h-screen pb-24 px-4 md:px-6">
					<Dashboard />
      			</div>
    		</div>
  		</div>
	</main>
);
render(App, document.getElementById('app'));  