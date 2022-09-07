import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import ControllerTable from './controllerTable';
import ItemTable from './itemTable';

export default function Table() {
  const [table, setTable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getTable = async () => {
    const controllerTable = new ControllerTable();
    try {
      const data = await controllerTable.createTable();
      data.unshift({
        id: null,
        name: null,
        shield: null,
        points: 'PTs',
        goals: 'GF',
        goalsConceded: 'GA',
        goalsDifference: 'GD',
        position: null
      })
      setTable(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTable();
  }, [])

  const separator = (item) => {
    if (item.leadingItem.position <= 4)
      return <View style={{ borderBottomColor: 'rgba(0,73,169,255)', borderBottomWidth: 1 }} />
    if (item.leadingItem.position >= 17)
      return <View style={{ borderBottomColor: '#f34336', borderBottomWidth: 1 }} />
    return <View style={{ borderBottomWidth: 1 }} />

  }

  if (isLoading)
    return (<View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size="large" color="rgba(228,189,0,255)" /></View>);

  return (
    <View style={styles.container}>
      <FlatList data={table} ItemSeparatorComponent={separator} renderItem={({ item }) => <ItemTable item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})