import { create } from 'zustand';

const useStore = create((set) => ({
	session: null,
	setSession: (session: any) => set({ session }),
}));

export default useStore;
