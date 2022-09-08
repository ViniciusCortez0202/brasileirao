import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import MatchItem from './matchItem';
import RoundsController from './roundsController';

export default function Rounds({ route }) {
  const current = route.params?.current;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataMatches, setMatches] = useState([]);
  const [selectedRound, setSelectedRound] = useState(null)

  const getRounds = async () => {
    const roundsController = new RoundsController();
    try {
      const list = await roundsController.getRounds();
      setData(list);
      if (current) {
        const currentRound = list.find(((item) => item.isCurrentRound))
        setSelectedRound(currentRound.id);       
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const getMatches = async (id) => {
    const roundsController = new RoundsController();
    try {
      const matches = await roundsController.getMatches(id);
      setMatches(matches);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRounds();
  }, []);

  useEffect(() => {
    if (selectedRound !== null)
      getMatches(selectedRound);
  }, [selectedRound])

  const separator = () => {
    return <View style={{ borderBottomColor: 'rgba(0,73,169,255)', borderBottomWidth: 1 }}></View>
  }

  const list = () => {
    if (dataMatches.length)
      return <FlatList data={dataMatches} ItemSeparatorComponent={separator} renderItem={({ item }) => <MatchItem match={item} />} />;
  }

  if (isLoading)
    return (<View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size="large" color="rgba(228,189,0,255)" /></View>);

  return (
    <View style={{ flex: 1 }}>
      <Picker
        selectedValue={selectedRound}
        onValueChange={(itemValue, itemIndex) => setSelectedRound(itemValue)
        }
        mode='dropdown'
      >
        <Picker.Item key={'-1'} label='Escola uma rodada' value={null} />
        {
          data.map((round) => {
            if (round.isCurrentRound)
              return <Picker.Item key={round.id} style={{ fontSize: 20 }} color='rgba(228,189,0,255)' label={`${round.id}: ${round.begin} à ${round.end}`} value={round.id} />
            return <Picker.Item key={round.id} style={{ fontSize: 20 }} color='#000' label={`${round.id}: ${round.begin} à ${round.end}`} value={round.id} />
          })
        }
      </Picker>
      {list()}
    </View>
  );
}