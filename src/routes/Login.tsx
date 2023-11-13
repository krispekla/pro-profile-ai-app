import { SignIn } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';

export default function Login() {
	const supaClient = useStore((state) => state.supaClient);
	const session = useStore((state) => state.session);
	const navigate = useNavigate();
	useEffect(() => {
		if (session) navigate('/');
	}, [session]);

	return (
		<div className="mx-auto mt-20 max-w-sm">
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
		</div>
	);
}
