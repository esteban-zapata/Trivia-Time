// ResultScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ navigation }) => {
  const questions = navigation.getParam('questions', []);
  const answers = navigation.getParam('answers', []);

  return (
    <View style={styles.container}>
      <Text style ={{color: 'black', fontSize: 25}}>Results</Text>
      {questions && answers && questions.map((question, index) => (
        <View key={index} style={[styles.questionContainer, { backgroundColor: answers[index] ? 'green' : 'brown' }]}>
          <Text style ={{color: 'white'}}>{question.question}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige'
  },
  questionContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    color: 'white'
  },
});

export default ResultScreen;
