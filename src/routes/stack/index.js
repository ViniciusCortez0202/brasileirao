import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../pages/home/index';
import DrawerRoute from '../drawer/index';

const Stack = createStackNavigator();

export default function StackRoute() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Drawer" component={DrawerRoute} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}