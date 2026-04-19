import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 300,
        height: 300,
        margin: 10,
        padding: 5,
        borderColor: '#00a44b',
        borderWidth: 2,
        borderRadius: 15
    },
    cardAtual: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#c21c22',
        borderWidth: 2,
        width: 300,
        height: 300,
        margin: 10,
        padding: 5,
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        margin: 20,
        color: '#fff',
    },
    titleAtualBackground: {
        width: '100%',
        backgroundColor: '#c21c22',
        borderRadius: 15,
    },
    titleBackground: {
        width: '100%',
        backgroundColor: '#00a44b',
        borderRadius: 15
    },
    text: {
        fontSize: 15,
        margin: 10,
        color: '#000',
    },
});

export function CardDiaSemana({ title, items, active }) {
    return (
        <View style={active ? styles.cardAtual : styles.card}>
            <View style={active ? styles.titleAtualBackground : styles.titleBackground}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {items.length > 0 &&
                items.map((item, key) => {
                    return (
                        <Text key={key} style={styles.text}>
                            {item}
                        </Text>
                    );
                })}
        </View>
    );
}
