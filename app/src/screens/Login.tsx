import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../auth/AuthContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        margin: 10,
    },
    textError: {
        color: 'red',
        margin: 5,
    },
});

interface LoginData {
    email: string | null | undefined,
    senha: string | null | undefined
}

export default function Login() {
    const { setAuthState } = useAuth();
    const [loginData, setLoginData] = useState<LoginData>({} as LoginData);
    const [erro, setErro] = useState('');

    // aqui é só pra simular banco de dados
    const [fakeData] = useState([
        {
            email: 'admin@ifrs.edu.br',
            senha: '1234',
            nome: 'Admin',
            token: '1234556',
            // 1 == administrador
            tipo: 1,
        },
        {
            email: 'maria@ifrs.edu.br',
            senha: '1234',
            nome: 'Maria',
            token: '123556',
            // 2 == comum
            tipo: 2,
        },
    ]);

    const logar = () => {
        for (const usuario of fakeData) {
            if (usuario.email === loginData?.email && usuario.senha === loginData?.senha) {
                setAuthState({
                    token: usuario.token,
                    user: {
                        nome: usuario.nome,
                        tipo: usuario.tipo,
                    },
                    auth: true,
                });

                return;
            }
        }

        setErro('Login falhou');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.textError}>{erro}</Text>
            <Input name={'email'} type={'text'} placeholder={'Informe o seu e-mail'} setData={setLoginData}/>
            <Input name={'senha'} type={'password'} placeholder={'Informe a sua senha'} setData={setLoginData}/>
            <Button title={'Entrar'} onPress={() => logar()} />
        </SafeAreaView>
    );
}
