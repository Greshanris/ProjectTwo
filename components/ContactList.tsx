import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: "Rishav Chaudhary",
            status: "Exploring variety in tech, and mystery in life itself",
            imageUrl: "https://avatars.githubusercontent.com/u/124981063?v=4",
        },
        {
            uid: 2,
            name: "Roshan Lamichhane",
            status: "iOS Developer, traveling as a hobby",
            imageUrl: "https://avatars.githubusercontent.com/u/10008589?v=4",
        },
        {
            uid: 3,
            name: "Samaya Mahate",
            status: "Web Development Enthusiast exploring cybersecurity",
            imageUrl: "https://avatars.githubusercontent.com/u/101032666?v=4",
        },
        {
            uid: 4,
            name: "Sushant Regmi",
            status: "Making new connections",
            imageUrl: "https://avatars.githubusercontent.com/u/118508011?v=4",
        },
    ];


    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(126, 147, 119)',
        paddingHorizontal: 8,
        paddingVertical: 7,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor:'#ef5777',
        padding: 4,
        borderRadius: 8,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
    },
    userStatus: {
        fontSize: 10,
        fontStyle: 'italic',
        flexShrink: 1
    }
})