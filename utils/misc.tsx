export function shuffleArray(array: number[]) {
    const _arr = [...array]
    for (let i = _arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[_arr[i], _arr[j]] = [_arr[j], _arr[i]]
    }
    return _arr
  }
  
  const colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange']

  export function getRandomAccentColor(n: number = 5): string {
    return colors[parseInt(String(Math.random() * n))]
  }
  