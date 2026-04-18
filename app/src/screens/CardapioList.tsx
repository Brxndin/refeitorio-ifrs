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
        marginBottom: 20,
    },
});

export default function CardapioList({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cardápio da Semana</Text>
            <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}
