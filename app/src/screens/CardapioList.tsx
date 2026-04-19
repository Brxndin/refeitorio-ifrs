import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { CardDiaSemana } from '../components/CardDiaSemana';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        flex: 1
    },
    scrollContent: {
        alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        margin: 20,
    },
    text: {
        fontSize: 15,
        margin: 10,
    },
});

export default function CardapioList({ navigation }) {
    // aqui é só pra simular banco de dados
    const [fakeData] = useState([
        {
            title: 'Segunda-feira - 27/04/2026 (Hoje)',
            items: [
                'Café da Manhã: Café, Leite e Bolacha Maria',
                'Almoço: Arroz, Feijão e Panqueca de Frango',
                'Janta: Macarrão com Carne Moída e Filé de Frango',
            ],
            active: true,
            favorito: false,
        },
        {
            title: 'Terça-feira - 28/04/2026',
            items: [
                'Café da Manhã: Café, Cuca e Bolacha Trakinas',
                'Almoço: Arroz, Lentilha e Carne de Gado',
                'Janta: Arroz, Feijoada e Panqueca Romeu e Julieta',
            ],
            active: false,
            favorito: true,
        },
        {
            title: 'Quarta-feira - 29/04/2026',
            items: [
                'Café da Manhã: Café, Suco de Laranja e Bolo de Chocolate',
                'Almoço: Arroz, Feijoada e Filé de Tilápia',
                'Janta: Massa Carbonara, Nuggets e Suco de Abacaxi',
            ],
            active: false,
            favorito: false,
        },
    ]);

    // usa o ref pois, sempre que saia da tela, ao voltar nela permanecia no último lugar scrollado
    // isso faz com que a tela sempre comece no topo
    const scrollRef = useRef(null);

    useFocusEffect(
        useCallback(() => {
            scrollRef.current?.scrollTo({ y: 0, animated: false });
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Cardápio da Semana</Text>
                {fakeData.length > 0 && fakeData.map((diaSemana, key) => {
                    return (
                        <CardDiaSemana
                            key={key}
                            title={diaSemana.title}
                            items={diaSemana.items}
                            active={diaSemana.active}
                            favorito={diaSemana.favorito}
                        />
                    );
                })}
                {fakeData.length <= 0 && (
                    <Text style={styles.text}>Ainda não há cardápio para essa semana!</Text>
                )}
                <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
                {fakeData.length > 0 && (
                    <Button title="Gerar PDF" onPress={() => console.log('Não desenvolvido')} />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
