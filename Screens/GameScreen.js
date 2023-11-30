import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import RNShake from 'react-native-shake';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: 0,
      score: 0,
      answers: [], // To track correct or incorrect answers
    };
  }
  
  componentDidMount() {
    // Fetch questions based on the passed apiUrl
    const apiUrl = this.props.navigation.getParam('apiUrl', '');
    if (apiUrl) {
      this.fetchQuestions(apiUrl);
    }
    // Shake!
    RNShake.addListener(() => this.handleShake());
  }
  
  handleShake() {
    //Reset game state and navigate back to the main menu
    this.setState({
      currentQuestion: 0,
      score: 0,
      answers: [],
    });
    this.props.navigation.navigate('MainMenu');
  }
      

  fetchQuestions = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const questions = data.results.map((question) => ({
        ...question,
        answeredCorrectly: null,
      }));
      this.setState({ questions });
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  checkAnswer = (answer) => {
    const { questions, currentQuestion, score, answers } = this.state;
    const currentAnswer = questions[currentQuestion].correct_answer === 'True';

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer === currentAnswer;

    this.setState({
      score: answer === currentAnswer ? score + 1 : score,
      currentQuestion: currentQuestion + 1,
      answers: updatedAnswers,
    });
  };

  render() {
    const { questions, currentQuestion, score, answers } = this.state;

    if (currentQuestion < questions.length) {
      const currentQuestionText = questions[currentQuestion].question;

      return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Question {currentQuestion + 1}</Text>
                <Text style={styles.questionText}> {currentQuestionText}</Text>
            </View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#4CAF50' }]}
            onPress={() => this.checkAnswer(true)}>
            <Text style={styles.buttonText}>True</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#F44336' }]}
            onPress={() => this.checkAnswer(false)}>
            <Text style={styles.buttonText}>False</Text>
          </TouchableOpacity>
        </View>
        
      );
    } else {
      // All questions answered, show results
      const apiUrl = this.props.navigation.getParam('apiUrl', '');

      return (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Finished!</Text>
          <Text style={styles.resultText}>Score: {score}</Text>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#2196F3' }]}
            onPress={() => this.props.navigation.navigate('ResultScreen', { questions, answers })}>
            <Text style={styles.buttonText}>View Results</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#4CAF50' }]}
            onPress={() => {
            this.setState({
            currentQuestion: 0,
            score: 0,
            answers: [], });
            this.props.navigation.navigate('GameScreen', { apiUrl });}}>
            <Text style={styles.buttonText}>Play Again</Text>
            </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FFC107' }]}
            onPress={() => this.props.navigation.navigate('MainMenu')}>
            <Text style={styles.buttonText}>Main Menu</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
    
  },
  questionContainer: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center', 
    marginTop: 50,
    
  }, 
  questionText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black'
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige'
  },
  resultText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
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
  },
});

export default GameScreen;
