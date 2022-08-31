import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function MatchItem({ match }) {

    const homeTeam = match.homeTeam;
    const visitor = match.visitor;

    return (
        <View style={styles.container}>
            {/* HomeTeam */}
            <View style={styles.match}>
                <Text style={styles.position}>{homeTeam.position}</Text>
                <View style={styles.content}>
                    <Image source={{ uri: homeTeam.shield["60x60"] }} style={{ width: 60, height: 60 }} />
                    <Text style={styles.name}>{homeTeam.name}</Text>
                </View>
                <Text style={styles.point}>{homeTeam.point}</Text>
            </View>
            <Text style={styles.versus}>X</Text>
            {/* Visitor */}
            <View style={styles.match}>
                <Text style={styles.point}>{visitor.point}</Text>
                <View style={styles.content}>
                    <Image source={{ uri: visitor.shield["60x60"] }} style={{ width: 60, height: 60 }} />
                    <Text style={styles.name}>{visitor.name}</Text>
                </View>
                <Text style={styles.position}>{visitor.position}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 25,
    },
    match: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        width: '50%',
        alignItems: 'center',
        right: '25%'
    },
    name: {
        top: 15,
        fontSize: 18, 
        fontWeight: '500'
    },  
    position: {
        width: '25%',
    },
    point: {
        width: '25%',
        fontSize: 18
    },
    versus: {
        position: 'absolute',
        left: '43%',
        top: 25,
        fontSize: 25,
        fontWeight: 'bold'
    }

});