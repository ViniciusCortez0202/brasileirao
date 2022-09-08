import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

export default function ContentDrawer(props) {

  const imageHeader = require('../../../assets/bola.png');
  const year = new Date().getFullYear();

  const header = (color, focused) => {
    return <View style={styles.container} >
      <Image source={imageHeader} style={{ width: 50, height: 50 }}/>
      <Text style={styles.textHeaderDrawer}>
        {`Brasileirão ${year}`}
      </Text>
    </View>
  }

  return (
    <DrawerContentScrollView {...props}>
      {header()}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  textHeaderDrawer: {
    textAlign: 'center',
    color: "rgb(235, 235, 235)",
    fontSize: 23,
    fontWeight: 'bold',
    margin: 10,
    borderBottomColor: 'rgba(255, 255, 0, 0.6)',
    borderBottomWidth: 2,
  }
})