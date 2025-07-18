import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>Me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>To</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>For</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>More...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>😶‍🌫️</Text>
                </View>
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
        paddingTop: 7,
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: 'rgb(36, 64, 96)',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    contentContainer: {
        paddingRight: 16,
    },
    text: {
        color: 'white',
    }
})