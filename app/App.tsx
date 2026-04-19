import Router from './src/router';
import { AuthProvider } from './src/auth/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <Router/>
            </AuthProvider>
        </SafeAreaProvider>
    );
}
