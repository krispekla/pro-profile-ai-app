import { Session } from '@supabase/supabase-js';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface UserState {
	session: Session | null;
	setSession: (session: Session) => void;
}

const useStore = create<UserState>((set) => ({
	session: null,
	setSession: (session: Session) => set({ session }),
}));

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useStore);
}

export default useStore;
