import { useFocusEffect } from '@react-navigation/native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
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
        flex: 1,
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

    const gerarPDF = async (diasSemana) => {
        const htmlContent = `
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body {
                        font-family: 'Helvetica', sans-serif;
                        padding: 20px;
                    }

                    h1 {
                        color: #2c3e50;
                        text-align: center;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    
                    th, td {
                        border: 1px solid #bdc3c7;
                        padding: 10px;
                        text-align: left;
                        vertical-align: top;
                    }

                    th {
                        background-color: #ecf0f1;
                        font-size: 12px;
                    }

                    p {
                        font-size: 10px;
                        margin: 4px 0;
                    }
                </style>
            </head>
            <body>
                <h1>Cardápio da Semana</h1>
                <table>
                    <thead>
                        <tr>
                            ${diasSemana.map((diaSemana) => `<th>${diaSemana.title}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${diasSemana.map((diaSemana) => `
                                <td>
                                    ${diaSemana.items.map((item) => `<p>${item}</p>`).join('')}
                                </td>
                            `)}
                        </tr>
                    </tbody>
                </table>
            </body>
            </html>
        `;

        try {
            const { uri } = await printToFileAsync({ html: htmlContent });

            await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
        } catch (error) {
            console.error('Erro ao gerar o PDF:', error);
        }
    };

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
                {fakeData.length > 0 && (
                    <Button title="Gerar PDF" onPress={() => gerarPDF(fakeData)} />
                )}
                <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
            </ScrollView>
        </SafeAreaView>
    );
}
