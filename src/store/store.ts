import { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

interface UserState {
	session: Session | null;
	setSession: (session: Session) => void;
}

const useStore = create<UserState>((set) => ({
	session: null,
	setSession: (session: Session) => set({ session }),
}));

export default useStore;
