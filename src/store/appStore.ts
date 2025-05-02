
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface UserState {
  user: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
  isAuthenticated: boolean;
  login: (name: string, email: string, avatar?: string) => void;
  logout: () => void;
  updateProfile: (name: string, email: string, avatar?: string) => void;
}

interface NotificationState {
  notifications: Array<{
    id: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
  }>;
  addNotification: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

export type AppState = ThemeState & UserState & NotificationState;

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme state
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      
      // User state
      user: null,
      isAuthenticated: false,
      login: (name, email, avatar) => set({ 
        user: { name, email, avatar }, 
        isAuthenticated: true 
      }),
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (name, email, avatar) => set((state) => ({
        user: state.user ? { ...state.user, name, email, avatar } : null
      })),
      
      // Notifications state
      notifications: [],
      addNotification: (message, type) => set((state) => ({
        notifications: [
          ...state.notifications,
          { 
            id: Date.now().toString(), 
            message, 
            type, 
            read: false 
          }
        ]
      })),
      markAsRead: (id) => set((state) => ({
        notifications: state.notifications.map(notification =>
          notification.id === id ? { ...notification, read: true } : notification
        )
      })),
      clearNotifications: () => set({ notifications: [] })
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
