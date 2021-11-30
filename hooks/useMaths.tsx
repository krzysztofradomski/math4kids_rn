import { useEffect, createContext, useContext, useState, Provider, ReactNode } from 'react'
import { shuffleArray } from '../utils/misc';
import * as React from 'react';

interface Calculations {
  add: string
  subtract: string
  multiply: string
  divide: string
}

type Calculation = keyof typeof calculations;

export const calculations: Calculations = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/'
};

interface MathsProps {
  children: ReactNode
}

const MathsContext = createContext({})

function MathsProvider( { children }: MathsProps ) {
  const [seed, setSeed] = useState(20)
  const [trigger, setTrigger] = useState(false)
  const [numbers, setNumbers] = useState<number[]>([])
  const [calculation, setCalculation] = useState<Calculation>('add')
  const [dummyAnswers, setDummyAnswers] = useState<number[]>([])
  const [answer, setAnswer] = useState<number>(NaN)

  useEffect(() => {
    const [n1, n2, d1, d2] = [
      Math.floor(Math.random() * seed + 0),
      Math.floor(Math.random() * seed + 1),
      Math.floor(Math.random() * seed + 2),
      Math.floor(Math.random() * seed + 3)
    ]
    if (
      new Set([n1, n2, d1, d2]).size !== [n1, n2, d1, d2].length ||
      (calculation === 'divide' && (n1 / n2) % 1 !== 0)
    ) {
      setTrigger(prev => !prev)
    } else {
      setNumbers(() => [n1, n2])
      setDummyAnswers(() => [d1, d2])
      // eslint-disable-next-line no-eval
      setAnswer(eval(`${n1}${calculations[calculation]}${n2}`))
    }
  }, [setCalculation, calculation, trigger, setTrigger, seed])

  const value = {
    setCalculation,
    calculation,
    numbers,
    dummyAnswers,
    answer,
    setAnswer,
    getNewCalculation: () => setTrigger(!trigger),
    setDifficulty: (difficulty: number) => setSeed(difficulty),
    difficulty: seed,
    choices: shuffleArray([answer, ...dummyAnswers])
  }

  return <MathsContext.Provider value={value}>{children}</MathsContext.Provider>
}

function useMaths() {
  const context = useContext(MathsContext)
  if (context === undefined) {
    throw new Error('useMaths must be used within a MathsProvider')
  }
  return context
}

export { useMaths, MathsProvider }
