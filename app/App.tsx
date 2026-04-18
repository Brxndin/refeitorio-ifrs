import Router from './src/router';
import { AuthProvider } from './src/auth/AuthProvider';

export default function App() {
    return (
        <AuthProvider>
            <Router/>
        </AuthProvider>
    );
}
