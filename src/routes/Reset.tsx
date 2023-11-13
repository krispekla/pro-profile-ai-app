import { UpdatePassword } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useStore from '../store/store';

export default function ForgetPassword() {
	const supaClient = useStore((state) => state.supaClient);

	return (
		<div className="mx-auto mt-20 max-w-sm">
			<UpdatePassword
				supabaseClient={supaClient}
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
		</div>
	);
}
