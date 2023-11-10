import { create } from 'zustand';

const useStore = create((set) => ({
	session: null,
	setSession: (session) => set({ session }),
}));

export default useStore;
