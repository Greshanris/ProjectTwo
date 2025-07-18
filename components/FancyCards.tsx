import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{
                    uri: 'https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image/uploads/+0Regular_Roundup/2019/1-January/TravelSwaps2019/Tahiti-lumadeline-01.png'
                }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>🌺 Tahiti & Moorea</Text>
                    <Text style={styles.cardLabel}>Mo'orea, French Polynesia</Text>
                    <Text style={styles.cardDescription}>Discover the magic of French Polynesia through Tahiti and Moorea.
                        Tahiti, the largest island, welcomes you with its vibrant markets, rich culture, and dramatic volcanic beaches. Just 30 minutes away by ferry, Moorea enchants with lush mountains, crystal-clear lagoons, and peaceful villages.
                        A paradise for nature lovers, these islands offer snorkeling, hiking, and the warm hospitality of the South Pacific.
                    </Text>
                    <Text style={styles.cardFooter}>☀️ Sun, sand, and serenity await you - 30 minutes away!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(126, 147, 119)',
        paddingHorizontal: 8,
        paddingTop: 7,
    },
    card: {
        width: 336,
        height: 430,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        shadowColor: 'black',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 200,
        width: 336,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: "#000000",
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardLabel: {
        color: "#000000",
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: "#2d3436",
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: "#000000",
        fontSize: 12,
        marginBottom: 5,
    }
})