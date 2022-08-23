import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../pages/home/index';
import Teams from '../../pages/teams';
import Rounds from '../../pages/rounds';
import Table from '../../pages/table';

import Ionicons from '@expo/vector-icons/Ionicons';
import ContentDrawer from './contentDrawer';
import { ImageBackground, StyleSheet } from 'react-native';


const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  const drawerContent = (props) => {
    return <ContentDrawer {...props} />
  }
  const styleItens = { 
    drawerStyle: {backgroundColor: 'rgb(81, 98, 88)', color: 'rgb(240, 240, 187)'},
    drawerLabelStyle: { fontSize: 20, fontWeight: 'bold' }, 
    drawerActiveBackgroundColor: 'rgb(12, 82, 12)',
    drawerActiveTintColor: 'rgb(240, 240, 187)',
    drawerInactiveTintColor: "rgb(173, 173, 140)"
  }
  return (
    <Drawer.Navigator screenOptions={styleItens} drawerContent={drawerContent}>
      <Drawer.Screen name="Home" component={Home} options={{
        drawerLabel: 'Home',
        headerTitle: '', headerTransparent: true, drawerIcon: ({ focused, size }) => {
          return <Ionicons name='home' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
      <Drawer.Screen name="Teams" component={Teams} options={{
        drawerLabel: "Times", headerTitle: "Times",
        drawerIcon: ({ focused, size }) => {
          return <Ionicons name='people' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
      <Drawer.Screen name="Table" component={Table} options={{
        drawerLabel: "Tabela", headerTitle: "Tabela",
        drawerIcon: ({ focused, size }) => {
          return <Ionicons name='podium' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
      <Drawer.Screen name="Rounds" component={Rounds} options={{
        drawerLabel: "Rodadas", headerTitle: "Rodadas",
        drawerIcon: ({ focused, size }) => {
          return <Ionicons name='list' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
    </Drawer.Navigator>
  );

}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#808080'
  }
})