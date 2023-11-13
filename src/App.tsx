import './App.css';

import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import ErrorPage from './routes/NotFound';
import Register from './routes/Register';
import Reset from './routes/Reset';
import useStore from './store/store';

function App() {
	const session = useStore((state) => state.session);
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					errorElement: <ErrorPage />,
					children: [
						{
							path: '/',
							element: <Dashboard />,
							loader: () => {
								return !session ? redirect('/login') : null;
							},
						},
						{
							path: '/login',
							element: <Login />,
						},
						{
							path: '/register',
							element: <Register />,
						},
						{
							path: '/reset',
							element: <Reset />,
						},
					],
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
