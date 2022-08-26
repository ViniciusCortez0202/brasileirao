import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import TeamsService from './../../services/teamsService';
import ItemTeam from './itemTeam';

export default function Teams() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTeams = async () => {
    const teamsService = new TeamsService();

    try {
      const teams = await teamsService.getTeams();
      setData(Object.values(teams));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { getTeams() }, [])
  if (isLoading) {
    return (<View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size="large" color="rgba(228,189,0,255)" /></View>);
  }
  return (
    <View>
      <FlatList data={data} renderItem={({ item, index, separators }) => <ItemTeam team={item} />} />
    </View>
  );

}