import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

export default function BlogCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image source={{
          uri: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/003c8b37f31ce461e71bb9706d606959',
        }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.cardBodyDescription}
            numberOfLines={3}
          >
            Discover the latest features in JavaScript ES12 (ECMAScript 2021), including logical assignment operators, numeric separators, Promise.any(), and more that make coding cleaner and more efficient.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://medium.com/@appvintechnologies/whats-new-in-node-js-21-0-features-every-developer-should-know-9472ebcb35df')}
          >
            <Text
              style={styles.blogLink}
            >Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/greshanris_1/')}
          >
            <Text
              style={styles.socialLink}
            >Follow me</Text>
          </TouchableOpacity>
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
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  elevatedCard: {
    backgroundColor: '#dfe4ea',
    elevation: 3,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,

  },
  cardBodyDescription: {
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  blogLink: {
    fontSize: 16,
    color: '#fbffffff',
    backgroundColor: '#57876bff',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
  },
  socialLink: {
    fontSize: 16,
    color: '#fbffffff',
    backgroundColor: '#3741fac9',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
  }
})