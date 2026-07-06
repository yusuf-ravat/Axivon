import { create } from 'zustand';
import { axiosInstance } from '../services/axios';

interface User {
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, name: string) => void;
  loginBackend: (email: string, password: string) => Promise<void>;
  registerBackend: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Read initial state from localStorage
const storedToken = localStorage.getItem('token');
const storedUser = localStorage.getItem('user');
let parsedUser: User | null = null;
if (storedUser) {
  try {
    parsedUser = JSON.parse(storedUser);
  } catch {
    parsedUser = null;
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!storedToken,
  user: parsedUser || (storedToken ? { email: 'admin@axivon.com', name: 'User Admin', role: 'Super Admin' } : null),
  
  login: (email, name) => {
    localStorage.setItem('token', 'mock-token');
    localStorage.setItem('user', JSON.stringify({ email, name, role: 'Super Admin' }));
    set({ isAuthenticated: true, user: { email, name, role: 'Super Admin' } });
  },

  loginBackend: async (email, password) => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    const { token, name, role } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ email, name, role }));
    set({ isAuthenticated: true, user: { email, name, role } });
  },

  registerBackend: async (name, email, password) => {
    const response = await axiosInstance.post('/auth/register', { name, email, password });
    const { token, role } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ email, name, role }));
    set({ isAuthenticated: true, user: { email, name, role } });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ isAuthenticated: false, user: null });
  },
}));
