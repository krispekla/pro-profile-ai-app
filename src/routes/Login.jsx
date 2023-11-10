import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
import useStore from '../store/store';

const AUTH_API = import.meta.env.VITE_AUTH_API;
const AUTH_KEY = import.meta.env.VITE_AUTH_KEY;
const supabase = createClient(AUTH_API, AUTH_KEY);

export default function Login() {
	const session = useStore((state) => state.session);
	const setSession = useStore((state) => state.setSession);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			console.log(session);
			setSession(session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => subscription.unsubscribe();
	}, []);

	if (!session) {
		return (
			<Auth
				supabaseClient={supabase}
				appearance={{ theme: ThemeSupa }}
			/>
		);
	} else {
		return (
			<div>
				Logged in!
				<button onClick={() => supabase.auth.signOut()}>Logout</button>
			</div>
		);
	}
}
