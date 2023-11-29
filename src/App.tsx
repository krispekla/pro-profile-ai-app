import './App.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import CharacterNew from './routes/CharacterNew';
import Dashboard from './routes/Dashboard';
import ForgetPassword from './routes/ForgetPassword';
import GeneratedPackage from './routes/GeneratedPackage';
import Login from './routes/Login';
import ErrorPage from './routes/NotFound';
import PackageOverview from './routes/PackageOverview';
import Register from './routes/Register';
import Reset from './routes/Reset';
import useStore from './store/store';

function ProtectedRoute() {
	const session = useStore((state) => state.session);
	return session ? <Outlet /> : <Login />;
}

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					element: <ProtectedRoute />,
					errorElement: <ErrorPage />,
					children: [
						{
							path: '/',
							element: <Dashboard />,
						},
						{
							path: '/package/:id',
							element: <PackageOverview />,
						},
						{
							path: '/generated/:id',
							element: <GeneratedPackage />,
						},
						{
							path: '/character/new',
							element: <CharacterNew />,
						},
					],
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
				{
					path: '/forget',
					element: <ForgetPassword />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
