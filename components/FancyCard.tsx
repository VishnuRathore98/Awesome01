import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Fancy Card:</Text>
            <View style={styles.card}>
                
                <Image source={{uri:'https://picsum.photos/200'}} style={styles.cardImage}/>
                
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>
                        Title
                    </Text>
                    <Text style={styles.cardLable}>
                        Body
                    </Text>
                    <Text style={styles.cardDescription}>
                        Description
                    </Text>
                    <Text style={styles.cardFooter}>
                        Footer
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        height:360,
        width:350,
        backgroundColor:'white',
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius:8
    },
    cardElevated:{
        elevation:8,

    },
    cardImage:{
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        height:200,
        width:350,
        marginBottom:6,
    },
    cardBody:{
        flex:1,        // What's its use here
        flexGrow:1,   // this too
        paddingHorizontal:12,
        // backgroundColor:'white',

    },
    cardTitle:{
        color:'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,

    },
    cardLable:{
        color:'black',
        fontSize: 18,
        marginBottom: 6,
    },
    cardDescription:{
        color:'black',
        fontSize: 14,
        marginBottom: 12,
    },
    cardFooter:{
        marginTop:18,
        color:'black',
        fontSize: 12,
    },
});

export default FancyCard;