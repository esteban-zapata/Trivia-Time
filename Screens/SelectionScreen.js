import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const SelectionScreen = ({ navigation }) => {
  const handleDifficultySelection = (difficulty) => {
    let apiUrl;
  
    // Set the API URL based on the selected difficulty
    if (difficulty === 'easy') {
      apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean';
    } else if (difficulty === 'medium') {
      apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean';
    } else if (difficulty === 'hard') {
      apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
    }
  
    // Navigate to the GameScreen with the selected difficulty
    navigation.navigate('GameScreen', { apiUrl });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Difficulty</Text>

      <TouchableOpacity
      style = {[styles.button, { backgroundColor: '#4CAF50' }]}
      onPress={() => handleDifficultySelection('easy')}>
        <Text style={styles.buttonText}>EASY</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style = {[styles.button, { backgroundColor: '#FFC107' }]}
      onPress={() => handleDifficultySelection('medium')}>
        <Text style={styles.buttonText}>MEDIUM</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style = {[styles.button, { backgroundColor: '#F44336' }]}
      onPress={() => handleDifficultySelection('hard')}>
        <Text style={styles.buttonText}>HARD</Text>
      </TouchableOpacity>

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
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'brown', 
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }

});


export default SelectionScreen;
