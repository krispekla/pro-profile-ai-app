import { SignIn } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useStore from '../store/store';

export default function Login() {
	const supaClient = useStore((state) => state.supaClient);
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
		</div>
	);
}
