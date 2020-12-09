import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { restaurants } from '../App';
export default function Home({ navigation, route }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView style={styles.container}>{
        Object.keys(restaurants).map(restaurante => {
          return (
            <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={restaurants[restaurante].id} onPress={() => navigation.push('Pratos', { restaurante: restaurants[restaurante] })}>
              <View style={styles.restaurante}>
                <Image source={restaurants[restaurante].image} style={styles.image} />
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Text style={styles.username}>{restaurante}</Text>
                  <Text style={styles.bio}>{restaurants[restaurante].PricePoint}{restaurants[restaurante].Tags.map(tag => " ⸎ " + tag)}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )
        })
      }</ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  restaurante: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  username: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bio: {
    fontSize: 10,
    padding: 5,
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  button: {
    padding: 7,
  },
  image: {
    width: 150,
    height: 100,
  }
});