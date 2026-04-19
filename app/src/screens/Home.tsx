import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        margin: 10,
    },
    text: {
        fontSize: 15,
        margin: 10,
    },
});

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Página Inicial</Text>
                <Text style={styles.text}>Bem vindo ao sistema de Cardápio do IFRS! Aqui você pode ver o cardápio da semana, fazer a impressão e até mesmo favoritar o seu preferido.</Text>
                <Button title={'Cardápio'} onPress={() => navigation.navigate('Cardapio')} />
                <Button title={'Logout'} onPress={() => navigation.navigate('Logout')} />
            </ScrollView>
        </SafeAreaView>
    );
}
