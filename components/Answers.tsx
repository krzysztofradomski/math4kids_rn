import { useState, useEffect } from 'react'
import * as React from 'react';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native'
import { useMaths } from '../hooks/useMaths'
import { getRandomAccentColor as gc } from '../utils/misc'

const Answers = ({ chooseCorrectAnswer }: { chooseCorrectAnswer: ((callback: () => void) => void) }) => {
  const { choices, answer, getNewCalculation } = useMaths()
  const [colors, setColors] = useState([gc(4), gc(4), gc(4)])
  const handlePress = (value: number) => (): void => {
    if (value === answer) {
      chooseCorrectAnswer(getNewCalculation);
    }
  }
  useEffect(() => {
    setColors([gc(4), gc(4), gc(4)])
  }, [choices])
  return (
    <View>
        {choices.map((answer, i) => (
            <View key={String(i) + answer} style={{margin:5}}>
                <Button title={String(answer)} onPress={handlePress(answer)} color={colors[i]} />
            </View>
        ))}
    </View>
  )
}

export default Answers
