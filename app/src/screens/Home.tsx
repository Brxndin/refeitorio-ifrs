import { StyleSheet, Text, View } from 'react-native';
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
});

export default function Home({ navigation }) {
    const { setAuthState } = useAuth();

    const logout = () => {
        setAuthState({
            token: null,
            user: null,
            auth: false,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página Inicial</Text>
            <Button title={'Cardápio'} onPress={() => navigation.navigate('Cardapio')} />
            <Button title={'Logout'} onPress={() => logout()} />
        </View>
    );
}
