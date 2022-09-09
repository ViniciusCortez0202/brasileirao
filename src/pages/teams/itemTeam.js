import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListPlayers from './listPlayers';

export default function ItemTeam({ team }) {
    const [isCollapsed, setisCollapsed] = useState(true);

    const icon = () => {
        return isCollapsed ?
            <Ionicons size={30} color='rgb(40,40,40)' name='chevron-forward-outline' /> :
            <Ionicons size={30} color='rgb(40,40,40)' name='chevron-down-outline' />
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => { setisCollapsed(!isCollapsed) }}>
                <Text style={styles.title}>{team.nome}</Text>
                {icon()}
            </Pressable>
            {!isCollapsed && <ListPlayers idTeam={team.id} isCollapsed={isCollapsed} />}
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
   
})