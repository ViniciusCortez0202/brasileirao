import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';
import Collapsible from 'react-native-collapsible';
import TeamsService from '../../services/teamsService';


export default function ListPlayers({ idTeam, isCollapsed }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPlayers = async (id) => {
        try {
            const teamsService = new TeamsService();
            const result = await teamsService.getPlayers(id);
            const playersFormat = Object.values(result.players);
            const positionsFormat = Object.values(result.positions);
            const values = playersFormat.map((player) => {
                const name = player.apelido;
                const positionPlayer_id = player.posicao_id
                const positionPlayer = positionsFormat.find(
                    (position) => position.id === positionPlayer_id).nome;
                return { name: name, positionPlayer: positionPlayer }
            });
            setData(values);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log(idTeam)
        getPlayers(idTeam);
    }, [])

    const renderItem = ({ item, index, separators }) => {
        return <View style={styles.listPlayers}>
            <Text style={styles.textItemPlayer}>{item.name}</Text>
            <Text style={styles.textItemPlayer}>{item.positionPlayer}</Text>
        </View>
    }

    if (isLoading) {
        return (<View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size="large" color="rgba(228,189,0,255)" /></View>);
    }

    return (
        <View style={{ flex: 1 }}>
            <Collapsible style={styles.collapded} collapsed={isCollapsed}>
                <FlatList data={data} renderItem={renderItem} />
            </Collapsible>
        </View>
    );
}

const styles = StyleSheet.create({
    listPlayers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 3,
        borderRadius: 10,
        backgroundColor: 'rgb(240, 240, 187)'
    },
    textItemPlayer: {
        fontSize: 18
    },
    collapded: {
        height: '100%',
        paddingTop: 15,
        paddingStart: 30
    }
})