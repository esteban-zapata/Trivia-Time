//Esteban Zapata

import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

function MainMenu({ navigation }) {
  const handlePlayGame = () => {
    navigation.navigate('DifficultySelection');
  };
  const handleInfo = () => {
    navigation.navigate('InfoScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRIVIA TIME</Text>

      <TouchableOpacity
      style = {[styles.button, styles.playButton]}
      onPress={handlePlayGame}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style = {[styles.button, styles.infoButton]}
      onPress={handleInfo}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beige',
    },
    title:{
        fontSize: 40,
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
    playButton: {
      backgroundColor: 'green',
    },
    infoButton: {
      backgroundColor: 'blue',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default MainMenu;
