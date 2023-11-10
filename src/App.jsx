import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="ppai_app">
			<nav>
				<h1 className="logo">Pro Profile AI</h1>
			</nav>
			<Outlet />
		</div>
	);
}

export default App;
