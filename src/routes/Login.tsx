import { Link, useNavigate } from 'react-router-dom';

import { SignIn } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import useStore from '../store/store';

export default function Login() {
	const supaClient = useStore((state) => state.supaClient);
	const session = useStore((state) => state.session);
	const navigate = useNavigate();

	useEffect(() => {
		if (session) {
			navigate('/');
		}
	}, [session]);
	return (
		<div className="mx-auto mt-20 max-w-sm">
			<h2 className="mb-5 text-center text-3xl font-bold">Sign in to your account</h2>
			<SignIn
				supabaseClient={supaClient}
				providers={[]}
				appearance={{
					theme: ThemeSupa,
					// TODO: https://supabase.com/docs/guides/auth/auth-helpers/auth-ui#override-themes
					variables: {
						default: {
							colors: {
								brand: 'hsl(0 100.0% 3.0%)',
								brandAccent: 'hsl(0 100% 5.1%)',
								brandButtonText: 'white',
							},
						},
					},
				}}
			/>
			<div className="mt-5 flex flex-col items-center justify-between">
				<div className="flex">
					<span className="mr-1">Don't have an account?</span>
					<Link
						to="/register"
						className="underline">
						Sign Up Now
					</Link>
				</div>
				<Link
					to="/forget"
					className="mt-3">
					Forget your password?
				</Link>
			</div>
		</div>
	);
}
