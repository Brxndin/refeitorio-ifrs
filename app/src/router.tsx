import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './auth/AuthContext';
import CardapioList from './screens/CardapioList';
import Home from './screens/Home';
import Login from './screens/Login';
import Logout from './screens/Logout';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Router() {
    const { authState } = useAuth();

    return (
        <NavigationContainer>
            {authState.auth ? (
                <Drawer.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: true,
                        drawerType: 'front',
                    }}
                >
                    <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                    <Drawer.Screen
                        name="Cardapio"
                        component={CardapioList}
                        options={{ title: 'Cardápio' }}
                    />
                    <Drawer.Screen name="Logout" component={Logout} options={{ title: 'Logout' }} />
                </Drawer.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
