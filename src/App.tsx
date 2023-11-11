import './App.css';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

function App() {
	const navigate = useNavigate();
	return (
		<div className="ppai_app">
			<nav>
				<h1 className="logo">
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
			<div className="app_container">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
