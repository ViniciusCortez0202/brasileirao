import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ItemTable({ item }) {

    return (
        <View style={styles.container}>
            <View style={styles.start}>
                <Text style={styles.position}>{item.position}</Text>
                <Image source={{uri: item.shield ? item.shield["45x45"] : null}} style={{ width: 40, height: 40 }}/>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.end}>
                <Text style={styles.textEnd}>{item.goals}</Text>
                <Text style={styles.textEnd}>{item.goalsConceded}</Text>
                <Text style={styles.textEnd}>{item.goalsDifference}</Text>
                <Text style={styles.textEnd}>{item.points}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    },
    start: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 20
    },  
    position: {
        position: 'absolute',
        marginLeft: -25,
        fontSize: 18
    },
    name: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    end: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textEnd: {
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: '400'
    }
})