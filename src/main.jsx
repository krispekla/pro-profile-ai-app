import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ForgottenPassword } from '@supabase/auth-ui-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Login from './routes/Login';
import ErrorPage from './routes/NotFound';
import Signup from './routes/Signup';

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
						path: '/signup',
						element: <Signup />,
					},
					{
						path: '/forget',
						element: <ForgottenPassword />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
