import { StyleSheet, Text, View } from 'react-native';
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
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página Inicial</Text>
            <Button title={'Cardápio'} onPress={() => navigation.navigate('Cardapio')} />
            <Button title={'Logout'} onPress={() => navigation.navigate('Logout')} />
        </View>
    );
}
