import { createContext, useContext } from 'react';
import { AuthState } from '../interfaces/AuthState';

interface AuthContextData {
    authState: AuthState,
    setAuthState: (data: AuthState) => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
