import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function MatchItem({ match }) {

    const team = (team) => {
        return <View>
            <Text>{ team.position }</Text>
            <View>
                <Image source={{uri: team.shield["60x60"]}} style={{width: 60, height: 60}}/>
                <Text>{ team.name }</Text>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            {team(match.homeTeam)}
            {team(match.visitor)}
        </View>
    );
}

const styles = StyleSheet.create({});