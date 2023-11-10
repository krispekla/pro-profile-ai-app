import { create } from 'zustand';

const useStore = create((set) => ({
	session: null,
	bears: 0,
	setSession: (session) => set({ session }),
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;
