import { Alert, Platform } from 'react-native'

export function shuffleArray(array: number[]) {
    const _arr = [...array]
    for (let i = _arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[_arr[i], _arr[j]] = [_arr[j], _arr[i]]
    }
    return _arr
  }
  
  const colors: string[] = ['#6b5b95', '#feb236', '#d64161', '#ff7b25']

  export function getRandomAccentColor(n: number = 4): string {
    return colors[parseInt(String(Math.random() * n))]
  }

const alertPolyfill = (title: string, description?: string, options: any[] = [], extra?: any) => {
    const result = window.confirm([title, description].filter(Boolean).join('\n'))

    if (result) {
        const confirmOption = options.find(({ style }) => style !== 'cancel')
        confirmOption && confirmOption.onPress()
    } else {
        const cancelOption = options.find(({ style }) => style === 'cancel')
        cancelOption && cancelOption.onPress()
    }
}

export const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert
