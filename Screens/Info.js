//ESTEBAN ZAPATA

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.text}>Trivia-Time!</Text>
      <Text style={styles.text}>By: Esteban Zapata</Text>
      <Text style={styles.text}>
        This is a fun and challenging game where players can test their knowledge on a variety of topics.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'beige'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'brown',
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Info;
