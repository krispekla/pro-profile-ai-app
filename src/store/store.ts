import { Session, SupabaseClient, createClient } from '@supabase/supabase-js';

import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

const AUTH_API = import.meta.env.VITE_AUTH_API;
const AUTH_KEY = import.meta.env.VITE_AUTH_KEY;

type State = {
	session: Session | null;
	supaClient: SupabaseClient;
};
type Actions = {
	setSession: (session: Session) => void;
	setSupabaseClient: () => void;
};

const useStore = create<State & Actions>((set) => ({
	session: null,
	supaClient: createClient(AUTH_API, AUTH_KEY),
	setSession: (session: Session) => set({ session }),
	setSupabaseClient: () => {
		const supabase = createClient(AUTH_API, AUTH_KEY);
		set({ supaClient: supabase });
	},
}));

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useStore);
}

export default useStore;
