import './App.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import CharacterEdit from './routes/CharacterEdit';
import CharacterNew from './routes/CharacterNew';
import Dashboard from './routes/Dashboard';
import ForgetPassword from './routes/ForgetPassword';
import GeneratedPackage from './routes/GeneratedPackage';
import Login from './routes/Login';
import ErrorPage from './routes/NotFound';
import PackageBuy from './routes/PackageBuy';
import PackageBuyReturn from './routes/PackageBuyReturn';
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
							path: '/package/:id/buy',
							element: <PackageBuy />,
						},
						{
							path: '/package/buy/return',
							element: <PackageBuyReturn />,
						},
						{
							path: '/generated/:id',
							element: <GeneratedPackage />,
						},
						{
							path: '/character/new',
							element: <CharacterNew />,
						},
						{
							path: '/character/edit/:id',
							element: <CharacterEdit />,
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
