import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState({});

    const router = useRouter();

    const verificaLogin = () => {
        router.replace('/(refeitorio)/home');
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Login</Text>
            <TextInput placeholder="Informe o seu e-mail" />
            <TextInput placeholder="Informe a sua senha" secureTextEntry={true} />
            <TouchableOpacity onPress={() => verificaLogin()}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
