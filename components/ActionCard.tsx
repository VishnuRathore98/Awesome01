import { StyleSheet, Text, TouchableOpacity, View, Linking, Image } from 'react-native';
import React from 'react';

export default function ActionCard(){
    function openWebsite(url:string){
        Linking.openURL(url);
    }
    return (
        <View>
            <Text style={styles.headingText}>Action Card:</Text>
            <View style={styles.card}>
            
                <Image source={{uri:'https://picsum.photos/200'}} style={styles.imageCard}/>
            
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={()=> openWebsite('https://www.google.com')}>
                        <Text style={styles.links}>Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        height:500,
        width:350,
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius:8,
    },
    imageCard:{
        borderTopRightRadius:6,
        borderTopLeftRadius:6,
        height:200,
        width:350,
    },
    footer:{
        marginBottom:4,
    },
    links:{
        color:'#0088FF',
        fontSize:16,
    },
    
});