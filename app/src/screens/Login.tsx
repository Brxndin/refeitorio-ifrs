import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from '../auth/AuthContext';
import { Button } from '../components/Button';

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
    input: {
        fontSize: 20,
        margin: 10,
        borderColor: '#000',
        borderWidth: 2,
        width: 'auto',
        height: 40,
    },
    button: {
        margin: 5,
        backgroundColor: 'blue',
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default function Login() {
    const { setAuthState } = useAuth();
    const [data, setData] = useState({});
    const [erro, setErro] = useState('');

    const logar = () => {
        const dadosUsuarios = [
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
        ];

        for (const usuario of dadosUsuarios) {
            if (usuario.email === data?.email && usuario.senha === data?.senha) {
                setAuthState({
                    token: dadosUsuarios[0].token,
                    user: dadosUsuarios[0],
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
            <TextInput
                style={styles.input}
                placeholder="Informe o seu e-mail"
                onChangeText={(value) => setData({ ...data, email: value })}
            />
            <TextInput
                style={styles.input}
                placeholder="Informe a sua senha"
                secureTextEntry={true}
                onChangeText={(value) => setData({ ...data, senha: value })}
            />
            <Button title={'Entrar'} onPress={() => logar()} />
        </View>
    );
}
