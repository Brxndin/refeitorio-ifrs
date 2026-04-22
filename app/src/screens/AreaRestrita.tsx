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

export default function AreaRestrita({ navigation }) {
    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Área Restrita</Text>
                <Text style={styles.text}>Somente pessoas autorizadas tem acesso à essa área.</Text>
                <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
                <Button title={'Cardápio'} onPress={() => navigation.navigate('CardapioList')} />
            </ScrollView>
        </SafeAreaView>
    );
}
