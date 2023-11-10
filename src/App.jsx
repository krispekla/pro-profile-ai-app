import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="ppai_app">
			<nav>
				<h1 className="logo">
					ProProfile<span className="logo_ai">AI</span>
				</h1>
				<div className="flex flex-row ml-auto mr-5">
					<button className="btn btn-primary px-4 py-2 rounded shadow-lg bg-gray-700 text-gray-200">Login</button>
					<button className="btn btn-primary px-4 py-2 rounded shadow-lg bg-gray-700 text-gray-200 ml-5">Logout</button>
					<button className="btn btn-primary px-4 py-2 rounded shadow-lg bg-gray-700 text-gray-200 ml-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 inline-block"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 10h16M4 14h16M4 18h16"
							/>
						</svg>
						Profile
					</button>
				</div>
			</nav>
			<div className="app_container">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
