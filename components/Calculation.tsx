import React, { useEffect, useState } from 'react'
import { useMaths, calculations, Calculation } from '../hooks/useMaths'
import { getRandomAccentColor } from '../utils/misc'
import { Text, View } from './Themed'


const Operation = ({ showAnswer = false }) => {
  const { numbers, calculation, answer } = useMaths()
  const [colors, setColors] = useState([getRandomAccentColor(), getRandomAccentColor()])
  useEffect(() => {
    setColors([getRandomAccentColor(), getRandomAccentColor()])
  }, [numbers])
  return (
    <View style={{flexDirection: 'row'}}>
        {[numbers[0], calculations[calculation as Calculation], numbers[1], '=', showAnswer ? answer : '?'].map((val, i) => (
          <View
            key={`${val}-${i}`}
            style={{backgroundColor: i % 2 === 0 ? colors[0] : colors[1], width: 50, height: 50, margin: 5, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}
          >
              <Text style={{fontWeight: 'bold', fontSize: 20}}>{val}</Text>
            </View>
        ))}
    </View>
  )
}


export default Operation
