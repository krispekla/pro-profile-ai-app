import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Dashboard from './routes/Dashboard';
import ErrorPage from './routes/NotFound';
import Login from './routes/Login';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './routes/Register';
import Reset from './routes/Reset';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						path: '/',
						element: <Dashboard />,
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

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
