import './App.css';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ThemeProvider } from './components/theme-provider';

function App() {
	const navigate = useNavigate();
	return (
		<ThemeProvider
			defaultTheme="light"
			storageKey="ppai-theme">
			<div className={`ppai_app `}>
				<nav>
					<h1
						className="logo cursor-pointer"
						onClick={() => navigate('/')}>
						ProProfile<span className="logo_ai">AI</span>
					</h1>
					<div className="flex flex-row ml-auto mr-5">
						<Button
							variant={'secondary'}
							onClick={() => navigate('/login')}>
							Login
						</Button>
						<Button
							className="ml-5"
							variant={'secondary'}
							onClick={() => navigate('/')}>
							Logout
						</Button>
						<Avatar className="ml-3">
							<AvatarImage
								src="https://github.com/shadcn.png"
								alt="@shadcn"
							/>
							<AvatarFallback>KP</AvatarFallback>
						</Avatar>
					</div>
				</nav>
				<main>
					<Outlet />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
