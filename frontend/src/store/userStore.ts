import { create } from 'zustand';

interface UserState {
  users: any[];
  setUsers: (users: any[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));
