import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import MatchItem from './matchItem';
import RoundsController from './roundsController';

export default function Rounds() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataMatches, setMatches] = useState([]);
  const [selectedRound, setSelectedRound] = useState(null)

  const getRounds = async () => {
    const roundsController = new RoundsController();
    try {
      const list = await roundsController.getRounds();
      setData(list);
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

  const list = () => {
    if (dataMatches.length)
      return <FlatList data={dataMatches} renderItem={({ item }) => <MatchItem match={item} />} />;
  }

  if (isLoading)
    return (<View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size="large" color="rgba(228,189,0,255)" /></View>);

  return (
    <View>
      <Picker
        selectedValue={selectedRound}
        onValueChange={(itemValue, itemIndex) => setSelectedRound(itemValue)
        }
        mode='dropdown'
      >
        <Picker.Item key={'-1'} label='Escola uma rodada' value={null} />
        {
          data.map((round) => {
            return <Picker.Item key={round.rodada_id} label={`${round.rodada_id}: ${round.inicio} à ${round.fim}`} value={round.rodada_id} />
          })
        }
      </Picker>
      {list()}
    </View>
  );
}