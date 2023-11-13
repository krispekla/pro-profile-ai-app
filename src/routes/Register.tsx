import { Link } from 'react-router-dom';
import { SignUp } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useStore from '../store/store';

export default function Register() {
	const supaClient = useStore((state) => state.supaClient);
	return (
		<div className="mx-auto mt-20 max-w-sm">
			<h2 className="mb-5 text-center text-3xl font-bold">Register account</h2>
			<SignUp
				supabaseClient={supaClient}
				providers={[]}
				appearance={{
					theme: ThemeSupa,
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
			<div className="mt-3 flex items-center justify-between">
				<Link className='underline' to="/forget">Forget your password?</Link>
				<Link
					to="/register"
					className="underline">
					Sign In
				</Link>
			</div>
		</div>
	);
}
