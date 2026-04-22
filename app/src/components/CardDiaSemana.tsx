import { FontAwesome } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { traduzTipoRefeicao } from '../helpers/CardapiosHelper';
import { isDiaDeHoje, traduzDiaSemana } from '../helpers/DatasHelper';
import { Cardapio } from '../interfaces/Cardapio';

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

export function CardDiaSemana({ data, refeicoes, favorito }: Cardapio) {
    const [isFavorito, setIsFavorito] = useState(favorito);

    const ativo = isDiaDeHoje(data);

    return (
        <View style={ativo ? styles.cardAtual : styles.card}>
            <View style={ativo ? styles.titleAtualBackground : styles.titleBackground}>
                <Text style={styles.title}>
                    {traduzDiaSemana(data)} - {dayjs(data).format('DD/MM/YYYY')}{ativo ? ' (Hoje)' : ''}
                </Text>
            </View>
            {refeicoes.length > 0 && refeicoes.map((refeicao, key) => {
                return (
                    <Text key={key} style={styles.text}>
                        {traduzTipoRefeicao(refeicao.tipo)}: {refeicao.itens.join(', ')}
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
