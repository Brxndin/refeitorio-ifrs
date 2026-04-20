import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import { Platform } from 'react-native';

// o auth é usado em formato de context e provider
// isso porque precisa ser usado em todo sistema e o SecureStore/localStorage não é reativo
// aqui garante que os dois (storage e state) sejam atualizados juntos e tenham os mesmos dados
export function AuthProvider({ children }) {
    const [authState, setAuthState] = useState({
        token: null,
        user: {},
        auth: false,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStorageData = async () => {
            try {
                let token;
                let user;
                let auth;

                if (Platform.OS === 'web') {
                    token = localStorage.getItem('token');
                    user = localStorage.getItem('user');
                    auth = localStorage.getItem('auth');
                } else {
                    token = await getItemAsync('token');
                    user = await getItemAsync('user');
                    auth = await getItemAsync('auth');
                }

                setAuthState({
                    token: token ?? null,
                    user: JSON.parse(user ?? '{}'),
                    auth: auth === 'true',
                });
            } catch (error) {
                console.log('Erro ao buscar os dados de autenticação:', error);
            }

            setLoading(false);
        };

        loadStorageData();
    }, []);

    const updateAuthState = async ({ token, user, auth }) => {
        if (!auth) {
            if (Platform.OS === 'web') {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('auth');
            } else {
                await deleteItemAsync('token');
                await deleteItemAsync('user');
                await deleteItemAsync('auth');
            }
        } else {
            if (Platform.OS === 'web') {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('auth', String(auth));
            } else {
                await setItemAsync('token', token);
                await setItemAsync('user', JSON.stringify(user));
                // SecureStore não aceita booleanos
                await setItemAsync('auth', String(auth));
            }
        }

        setAuthState({
            token: token ?? null,
            user: user ?? {},
            auth: auth ?? false,
        });
    };

    if (loading) {
        return null;
    }

    const value = { authState, setAuthState: updateAuthState };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
