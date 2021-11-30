import { useState, useEffect } from 'react'
import * as React from 'react';
import { Text, View } from '../components/Themed';
import { Button, Pressable } from 'react-native'
import { useMaths } from '../hooks/useMaths'
import { getRandomAccentColor as gc } from '../utils/misc'

const Answers = ({ chooseAnswer = () => {} }) => {
  const { choices } = useMaths()
  const [colors, setColors] = useState([gc(4), gc(4), gc(4)])
  useEffect(() => {
    setColors([gc(4), gc(4), gc(4)])
  }, [choices])
  return (
    <View>
        {choices.map((answer, i) => (
            <View key={String(answer)} style={{margin:5}}>
                <Button  title={String(answer)} onPress={() => {}} color={colors[i]} />
            </View>
        ))}
    </View>
  )
}

export default Answers
