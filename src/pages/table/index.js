import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator, TextInput } from 'react-native';
import ControllerTable from './controllerTable';
import ItemTable from './itemTable';

export default function Table() {
  const table = useRef([]);
  const [searchTable, setSearchTable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getTable = async () => {
    const controllerTable = new ControllerTable();
    try {
      const data = await controllerTable.createTable();
      data.unshift({
        id: null,
        name: '',
        shield: null,
        points: 'PTs',
        goals: 'GF',
        goalsConceded: 'GA',
        goalsDifference: 'GD',
        position: null
      })
      table.current = data;
      setSearchTable(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTable();
  }, [])

  const onChangeText = (value) => {
    const filterTable = table.current.filter((element) => {
      console.log(element)
      return element.name.toUpperCase().trim().includes(value.toUpperCase().trim());
    });
    setSearchTable(filterTable);
  }

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
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Pesquise aqui o seu time"
      />
      <FlatList data={searchTable} ItemSeparatorComponent={separator} renderItem={({ item }) => <ItemTable item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: 'rgba(228,189,0,255)',
    padding: 10
  }
})