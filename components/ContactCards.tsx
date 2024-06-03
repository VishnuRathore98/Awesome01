import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
// import React from 'react';

export default function ContactCards() {

    const users = [
        {
          image: "https://source.unsplash.com/random/?user-profile",
          username: "Anni",
          bio: "I'm a passionate developer exploring the world of coding!",
        },
        {
          image: "https://source.unsplash.com/random/?user-profile",
          username: "Baboon",
          bio: "Music lover, book enthusiast, and aspiring writer.",
        },
        {
          image: "https://source.unsplash.com/random/?user-profile",
          username: "Charli",
          bio: "Coffee addict ☕️, nature lover 🌿, and travel enthusiast 🌍.",
        },
        {
          image: "https://source.unsplash.com/random/?user-profile",
          username: "Darek",
          bio: "Fitness freak 💪, health advocate 🥗, and outdoor adventurer 🏔️.",
        },
        {
          image: "https://source.unsplash.com/random/?user-profile",
          username: "Elena",
          bio: "Art enthusiast 🎨, animal lover 🐾, and foodie 🍜.",
        }
      ];      

    return (
        <View>
            <Text style={styles.headingText}>Contact Cards:</Text>
            <View style={styles.card}>
                <ScrollView scrollEnabled={true}>
                    {users.map(({image, username, bio})=>(
                        <View style={styles.contactCard}>
                            <Image style={styles.contactImage} source={{uri: image}}/>
                            <View style={styles.contactDetails}>
                                <Text style={styles.userName}>{username}</Text>
                                <Text style={styles.userDetail}>{bio}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
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
        // height:350,
        flex:1,
        width:360,
        paddingHorizontal:16,
        margin:2
    },
    contactCard:{
        flex:1,
        backgroundColor:'indigo',
        flexDirection:'row',
        padding:4,
        marginVertical: 8,
        borderRadius:8,
    },
    contactImage:{
        height:60,
        width:60,
        borderRadius: 60/2,

    },
    contactDetails:{
        flex:1,
        marginHorizontal:6,
        
    },
    userName:{
        fontSize: 18,
        fontWeight:'700'
    },
    userDetail:{},

});