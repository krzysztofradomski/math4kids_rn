import { useState, useEffect } from 'react'
import * as React from 'react';
import { Text, View } from '../components/Themed';
import { Button, Pressable } from 'react-native'
import { useMaths } from '../hooks/useMaths'
import { getRandomAccentColor as gc } from '../utils/misc'

const Answers = ({ chooseAnswer = () => {}, score }) => {
  const { getNewCalculation } = useMaths()
  const color = gc()
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
        <Button  title={score} onPress={() => {}} color={gc()} />
        <Button  title="Reset calculation" onPress={() => getNewCalculation()} color={gc()} />
        <Button  title="Change difficulty" onPress={() => {}} color={gc()} />
    </View>
  )
}

export default Answers
