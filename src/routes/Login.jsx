import { useEffect, useState } from 'react';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';

const AUTH_KEY = import.meta.env.VITE_AUTH_KEY;
const supabase = createClient('', AUTH_KEY);

export default function Login() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
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
				<pre>
					{Object.keys(session).map((key) => (
						<code key={key}>{`${key}: ${JSON.stringify(session[key], null, 2)}`}</code>
					))}
				</pre>{' '}
				<button onClick={()=> supabase.auth.signOut()}>Logout</button>
			</div>
		);
	}
}
