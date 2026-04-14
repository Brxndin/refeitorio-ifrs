import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Home</Text>

            <Text>Deverá ter: tela de login, tela inicial (home), menu dropdown (hamburguer/lista, tipo um nav) e uma tela que vai ter 5 dias da semana (talvez 7), um quadrado cada dia</Text>
            <Text>O quadrado do dia atual deverá ter cor de destaque diferente</Text>
            <Text>Em cima dessas telas, deverá ter um filtro do tipo semana do dia 10 ao 17, por exemplo. Assim é possível filtrar por semana</Text>
            <Text>Ter uma estrela no dia para favoritá-lo</Text>
            <Text>Ter opção para imprimir em pdf (tem biblioteca) a semana atual, mostrando os dias, o cardápio e tudo mais</Text>
            <Text>Fazer inicialmente com dados fixos, depois tentar desenvolver api pra isso usando typescript e clean architecture</Text>

            {/* <Text>Tipos Refeição: 1 => Café da Manhã, 2 => Almoço, 3 => Janta, 4 => Ceia</Text>
            <Text>Tipos Usuário: 1 => Servidor, 2 => Aluno</Text> */}
        </SafeAreaView>
    );
}
