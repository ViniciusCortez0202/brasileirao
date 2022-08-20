import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../home/index';

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
 return (
   <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} options={{headerTitle: '', headerTransparent: true}}/>
    {/* <Drawer.Screen name="Teams" component={Times}/>
    <Drawer.Screen name="Rounds" component={Times}/>
    <Drawer.Screen name="Tables" component={Times}/> */}
   </Drawer.Navigator>
 );
}