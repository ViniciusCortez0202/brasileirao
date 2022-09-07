import React, { useEffect } from 'react';
import { View } from 'react-native';
import ControllerTable from './controllerTable';

export default function Table() {

  const getTable = async () => {
    const controllerTable = new ControllerTable();
    console.log(await controllerTable.createTable())
  }

  useEffect(() => {
    getTable();
  }, [])
  return (
    <View />
  );
}