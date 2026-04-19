import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '90%',
        height: 'auto',
        margin: 10,
        padding: 5,
        borderColor: '#00a44b',
        borderWidth: 2,
        borderRadius: 15,
    },
    cardAtual: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#c21c22',
        borderWidth: 2,
        width: '90%',
        height: 'auto',
        margin: 10,
        padding: 5,
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        margin: 20,
        color: '#fff',
        textAlign: 'center',
    },
    titleAtualBackground: {
        width: '100%',
        backgroundColor: '#c21c22',
        borderRadius: 15,
    },
    titleBackground: {
        width: '100%',
        backgroundColor: '#00a44b',
        borderRadius: 15,
    },
    text: {
        fontSize: 15,
        margin: 10,
        color: '#000',
    },
    favorito: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});

export function CardDiaSemana({ title, items, active, favorito }) {
    const [isFavorito, setIsFavorito] = useState(favorito);

    return (
        <View style={active ? styles.cardAtual : styles.card}>
            <View style={active ? styles.titleAtualBackground : styles.titleBackground}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {items.length > 0 && items.map((item, key) => {
                return (
                    <Text key={key} style={styles.text}>
                        {item}
                    </Text>
                );
            })}
            <View style={styles.favorito}>
                <Pressable onPress={() => setIsFavorito(!isFavorito)}>
                    <FontAwesome
                        name={isFavorito ? 'star' : 'star-o'}
                        size={32}
                        color={isFavorito ? '#ffcb00' : '#909090'}
                    />
                </Pressable>
            </View>
        </View>
    );
}
