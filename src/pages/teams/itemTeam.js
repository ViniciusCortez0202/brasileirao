import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Ionicons } from '@expo/vector-icons';
import TeamsService from '../../services/teamsService';

export default function ItemTeam({ team }) {
    const [isCollapsed, setisCollapsed] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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
            setLoading(false);
        }
    }

    useEffect(() => {
        getPlayers(team.id);
    }, [])

    const icon = () => {
        return isCollapsed ?
            <Ionicons size={30} color='rgb(40,40,40)' name='chevron-forward-outline' /> :
            <Ionicons size={30} color='rgb(40,40,40)' name='chevron-down-outline' />
    }

    const renderItem = ({ item, index, separators }) => {
        return <View style={styles.listPlayers}>
            <Text style={styles.textItemPlayer}>{item.name}</Text>
            <Text style={styles.textItemPlayer}>{item.positionPlayer}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => { setisCollapsed(!isCollapsed) }}>
                <Text style={styles.title}>{team.nome}</Text>
                {icon()}
            </Pressable>
            <Collapsible style={styles.collapded} collapsed={isCollapsed}>
                <FlatList data={data} renderItem={renderItem} />
            </Collapsible>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'rgba(228,189,0,255)',
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        color: "rgb(40,40,40)"
    },
    collapded: {
        paddingTop: 15,
        paddingStart: 30
    },
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
    }

})