import './App.css';

import { useState } from 'react';
import Login from './routes/Login';

function App() {
	const [user, setUser] = useState(null);

	return (
		<>
			<h1>Pro Profile AI</h1>
			<div className="flex flex-col space-y-5 pt-8">
				<Login />
				<div>{JSON.stringify(user, null, 2)}</div>
			</div>
		</>
	);
}

export default App;
