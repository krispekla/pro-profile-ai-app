import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
	// const [user, setUser] = useState(null);

	return (
		<>
			<h1>Pro Profile AI</h1>
			{/* <div className="flex flex-col space-y-5 pt-8">
			</div> */}
			<Outlet />
		</>
	);
}

export default App;
