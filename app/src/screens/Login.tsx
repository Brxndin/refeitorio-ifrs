import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

export default function Login() {
    const { setAuthState } = useAuth();
    const [data, setData] = useState({});
    const [erro, setErro] = useState('');

    // aqui é só pra simular banco de dados
    const [fakeData] = useState([
        {
            email: 'admin@ifrs.edu.br',
            senha: '1234',
            nome: 'Admin',
            token: '1234556',
        },
        {
            email: 'maria@ifrs.edu.br',
            senha: '1234',
            nome: 'Maria',
            token: '123556',
        },
    ]);

    const logar = () => {
        for (const usuario of fakeData) {
            if (usuario.email === data?.email && usuario.senha === data?.senha) {
                setAuthState({
                    token: usuario.token,
                    user: usuario,
                    auth: true,
                });

                return;
            }
        }

        setErro('Login falhou');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.textError}>{erro}</Text>
            <Input name={'email'} type={'text'} placeholder={'Informe o seu e-mail'} setData={setData}/>
            <Input name={'senha'} type={'password'} placeholder={'Informe a sua senha'} setData={setData}/>
            <Button title={'Entrar'} onPress={() => logar()} />
        </View>
    );
}
