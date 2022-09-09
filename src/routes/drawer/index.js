import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../pages/home/index';
import Teams from '../../pages/teams';
import Rounds from '../../pages/rounds';
import Table from '../../pages/table';

import Ionicons from '@expo/vector-icons/Ionicons';
import ContentDrawer from './contentDrawer';
import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  const drawerContent = (props) => {
    return <ContentDrawer {...props} />
  }
  const styleItens = { styles: ({navigation}) => ({ 
    drawerStyle: {backgroundColor: 'rgb(81, 98, 88)', color: 'rgb(240, 240, 187)'},
    drawerLabelStyle: { fontSize: 20, fontWeight: 'bold' }, 
    drawerActiveBackgroundColor: 'rgb(12, 82, 12)',
    drawerActiveTintColor: 'rgb(240, 240, 187)',
    drawerInactiveTintColor: "rgb(173, 173, 140)",
    headerLeft: (focused, size) => <Pressable onPress={navigation.toggleDrawer}>
      <Ionicons name='reorder-three-outline' size={42} color='rgba(228,189,0,255)'></Ionicons>  
    </Pressable>
  })};
  const titleFormat = (title) => <Text style={{fontSize: 24, fontWeight: 'bold', color: '#fff', paddingBottom: 5}}>{title}</Text>;
  const headerStyle = {backgroundColor: 'rgba(0, 128, 0, 0.8)'};
  return (
    <Drawer.Navigator screenOptions={styleItens.styles} drawerContent={drawerContent}>
      <Drawer.Screen name="Home" component={Home} options={{
        drawerLabel: 'Home',
        headerTitle: '', headerTransparent: true, drawerIcon: ({ focused, size }) => {
          return <Ionicons name='home' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
      <Drawer.Screen name="Teams" component={Teams} options={{
        headerStyle: headerStyle,
        drawerLabel: "Times", headerTitle: () => titleFormat("Times"),
        drawerIcon: ({ focused, size }) => {
          return <Ionicons name='people' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
      <Drawer.Screen name="Table" component={Table} options={{
        headerStyle: headerStyle,
        drawerLabel: "Tabela", headerTitle: () => titleFormat('Tabela'),
        drawerIcon: ({ focused, size }) => {
          return <Ionicons name='podium' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
      <Drawer.Screen name="Rounds" initialParams={{current: false}} component={Rounds} options={{
        headerStyle: headerStyle,
        drawerLabel: "Rodadas", headerTitle: () => titleFormat('Rodadas'),
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