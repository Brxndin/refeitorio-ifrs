import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useCallback, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { CardDiaSemana } from '../components/CardDiaSemana';
import { traduzTipoRefeicao } from '../helpers/CardapiosHelper';
import { traduzDiaSemana } from '../helpers/DatasHelper';
import { Cardapio } from '../interfaces/Cardapio';

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
            data: '2026-04-27',
            refeicoes: [
                {
                    tipo: 1,
                    itens: [ 'Café', 'Leite', 'Bolacha Trakinas' ],
                },
                {
                    tipo: 2,
                    itens: [ 'Arroz', 'Feijão', 'Bife de Gado' ],
                },
                {
                    tipo: 3,
                    itens: [ 'Massa Carbonara', 'Nuggets', 'Suco de Abacaxi' ],
                },
            ],
            favorito: false,
        },
        {
            data: '2026-04-28',
            refeicoes: [
                {
                    tipo: 1,
                    itens: [ 'Café', 'Suco de Uva', 'Bolo de Cenoura com Cobertura de Cholocate' ],
                },
                {
                    tipo: 2,
                    itens: [ 'Arroz', 'Lentilha', 'Filé de Frango' ],
                },
                {
                    tipo: 3,
                    itens: [ 'Cachorro-Quente', 'Refrigerante', 'Suco de Bergamota' ],
                },
            ],
            favorito: true,
        },
        {
            data: '2026-04-29',
            refeicoes: [
                {
                    tipo: 1,
                    itens: [ 'Chocolate-Quente', 'Bolacha Maria' ],
                },
                {
                    tipo: 2,
                    itens: [ 'Macarrão ao Molho Sugo', 'Filé de Tilápia', 'Suco de Caju' ],
                },
                {
                    tipo: 3,
                    itens: [ 'Massa Carbonara', 'Batata Frita', 'Suco de Laranja' ],
                },
            ],
            favorito: false,
        },
        {
            data: '2026-04-30',
            refeicoes: [
                {
                    tipo: 1,
                    itens: [ 'Café', 'Leite', 'Pão com Chimia' ],
                },
                {
                    tipo: 2,
                    itens: [ 'Arroz', 'Feijoada', 'Farofa', 'Churrasco' ],
                },
                {
                    tipo: 3,
                    itens: [ 'Panqueca Romeu e Julieta', 'Massa ao Molho Branco', 'Suco de Abacaxi' ],
                },
            ],
            favorito: false,
        },
        {
            data: '2026-05-01',
            refeicoes: [
                {
                    tipo: 1,
                    itens: [ 'Café', 'Suco de Laranja', 'Bolo de Chocolate' ],
                },
                {
                    tipo: 2,
                    itens: [ 'Arroz', 'Feijoada', 'Filé de Tilápia' ],
                },
                {
                    tipo: 3,
                    itens: [ 'Massa Carbonara', 'Nuggets', 'Suco de Abacaxi' ],
                },
            ],
            favorito: false,
        },
    ]);

    const gerarPDF = async (diasSemana: Cardapio[]) => {
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
                            ${diasSemana.map((diaSemana) => `<th>${traduzDiaSemana(diaSemana.data)} - ${dayjs(diaSemana.data).format('DD/MM/YYYY')}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${diasSemana.map((diaSemana) => `
                                <td>
                                    ${diaSemana.refeicoes.map((refeicao) => `<p>${traduzTipoRefeicao(refeicao.tipo)}: ${refeicao.itens.join(', ')}</p>`)}
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
    const scrollRef = useRef<ScrollView>(null);

    useFocusEffect(
        useCallback(() => {
            scrollRef.current?.scrollTo({ y: 0, animated: false });
        }, [])
    );

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Cardápio da Semana</Text>
                {fakeData.length > 0 && fakeData.map((diaSemana, key) => {
                    return (
                        <CardDiaSemana
                            key={key}
                            data={diaSemana.data}
                            refeicoes={diaSemana.refeicoes}
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
                <Button title="Home" onPress={() => navigation.navigate('Home')} />
            </ScrollView>
        </SafeAreaView>
    );
}
