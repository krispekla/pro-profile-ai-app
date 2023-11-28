import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import useStore from '../store/store';
import Footer from './Footer';

export default function Layout() {
	const navigate = useNavigate();
	const session = useStore((state) => state.session);
	const setSession = useStore((state) => state.setSession);
	const supaClient = useStore((state) => state.supaClient);

	useEffect(() => {
		supaClient.auth.getSession().then(({ data: { session } }) => {
			setSession(session as Session);
		});
		const {
			data: { subscription },
		} = supaClient.auth.onAuthStateChange((_event, session) => {
			setSession(session as Session);
		});

		return () => subscription.unsubscribe();
	}, []);

	function logout() {
		supaClient.auth.signOut();
		navigate('/login');
	}
	return (
		<ThemeProvider
			defaultTheme="light"
			storageKey="ppai-theme">
			<div className="ppai_app">
				<nav>
					<h1
						className="logo"
						onClick={() => navigate('/')}>
						ProProfile<span className="logo_ai">AI</span>
					</h1>
					<div className="ml-auto flex flex-row">
						{!session && (
							<>
								<Button
									className="mr-5"
									variant={'default'}
									onClick={() => navigate('/login')}>
									Login
								</Button>
								<Button
									className="mr-5"
									variant={'default'}
									onClick={() => navigate('/register')}>
									Register
								</Button>
							</>
						)}
						{session && (
							<>
								<Button
									className="ml-5"
									variant={'default'}
									onClick={() => logout()}>
									Logout
								</Button>
								<Avatar className="mx-3">
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>KP</AvatarFallback>
								</Avatar>
							</>
						)}
					</div>
				</nav>
				<main className="container h-full">
					<Outlet />
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}
