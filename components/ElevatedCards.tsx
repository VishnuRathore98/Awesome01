import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

function ElevatedCards(){
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards:</Text>
            <ScrollView horizontal={true}  style={[styles.container]}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Card One</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Card Two</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Card Three</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Card Four</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Card Five</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Card Six</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container:{
        padding:8,        
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        height:100,
        width:100,
        margin: 8,
        borderRadius: 4,
    },
    cardElevated:{
        backgroundColor:'indigo',
        elevation:4,
        shadowColor: 'white',
        shadowOpacity: 0.5,
        // shadowRadius: 1
    },
});

export default ElevatedCards;