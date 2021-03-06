import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MathsProvider } from '../hooks/useMaths'
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Answers from './Answers';
import Controls from './Controls';
import Calculation from './Calculation';
import { alert } from '../utils/misc';

export default function Main({ path, calculation = '' }: { path: string, calculation?: string }) {
  const [score, setScore] = React.useState(0)
  const [showAnswer, setShowAnswer] = React.useState(false)
  const chooseCorrectAnswer = (callback: () => void): void => {
    setShowAnswer(prev => true);
    setScore(old => old + 1);
    alert('Correct answer!');
    setTimeout(() => {
      setShowAnswer(prev => false);
      callback();
    }, 2000);
  }
  return (
    <MathsProvider>
    <View style={styles.wrapper}>
      <View style={styles.getStartedContainer}>

      <Calculation showAnswer={showAnswer}/>

      </View>
 

      <View style={styles.answers}>
        <Controls score={score} />
        <Answers chooseCorrectAnswer={chooseCorrectAnswer} />
      </View>
    </View>
    </MathsProvider>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  answers: {
    marginTop: 15,
    marginBottom: 0,
    alignContent: 'flex-end'
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
