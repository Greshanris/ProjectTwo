import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container} >
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
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
  container: {
    flex: 1,
    flexDirection: 'row',
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
  cardOne: {
    backgroundColor: 'rgb(218, 40, 40)',
  },
  cardTwo: {
    backgroundColor: 'rgba(138, 148, 0, 0.72)',
  },
  cardThree: {
    backgroundColor: 'rgb(78, 83, 242)',
  },
  text: {
    color: 'white',
  }
})