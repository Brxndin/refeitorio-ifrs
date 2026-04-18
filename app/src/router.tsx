import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './auth/AuthContext';
import CardapioList from './screens/CardapioList';
import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function Router() {
    const { authState } = useAuth();

    return (
        <NavigationContainer>
            {authState.auth ? (
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Cardapio"
                        component={CardapioList}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
