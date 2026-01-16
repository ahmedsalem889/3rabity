    import React, { createContext, useContext, useEffect, useState } from 'react';
import { authApi } from '../api/auth/auth.api'; // We will refactor this next
import type { LoginDTO, RegisterDTO } from '../api/auth/auth.dto';
import type { User } from '../api/users/users.dto';
import {
    getAccessToken,
    getAuthUser,
    removeAccessToken,
    removeAuthUser,
    setAccessToken,
    setAuthUser as setLocalStorageUser,
} from '../utils/localstorage';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (data: LoginDTO) => Promise<void>;
    register: (data: RegisterDTO) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    // We can switch this to useNavigate if we wrap App content differently, 
    // but usually AuthProvider wraps Routes, so we might not have access to navigate inside AuthProvider 
    // unless we split the provider. For now, we'll assume AuthProvider is inside BrowserRouter or we use a workaround if needed.
    // Actually, in App.tsx, BrowserRouter is inside App. So if we wrap everything in main.tsx or App.tsx, we need to be careful.
    // Let's check App.tsx again. App has BrowserRouter. So AuthProvider should be inside BrowserRouter.

    useEffect(() => {
        const initAuth = () => {
            try {
                const token = getAccessToken();
                const storedUser = getAuthUser();
                if (token && storedUser) {
                    setUser(storedUser);
                }
            } catch (error) {
                console.error("Failed to restore auth session:", error);
                // Clean up if invalid
                removeAccessToken();
                removeAuthUser();
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    const login = async (data: LoginDTO) => {
        try {
            // NOTE: authApi needs to be refactored to return the data directly or we adjust here.
            // Currently authApi.login returns Promise<LoginResponseDTO>
            const response = await authApi.login(data);
            const { user, accessToken } = response;

            setUser(user);
            setAccessToken(accessToken);
            setLocalStorageUser(user);
            // Navigation should be handled by the component calling login or we need to pass navigate
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const register = async (data: RegisterDTO) => {
        try {
            await authApi.register(data);
            // Usually register logs you in or redirects to login. 
            // Based on previous code, it just registers.
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        removeAccessToken();
        removeAuthUser();
        // Ideally call API logout if needed
        authApi.logout().catch(console.error);
        // Navigation to login or home will happen reactively or by the caller
    };

    const value = {
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
