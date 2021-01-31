export function buildCards() {
  let id = 0
  const images = {
    angular: 'https://github.com/JoakoV3/MemoryGame-React/blob/master/angular.png?raw=true',
    css: 'https://raw.githubusercontent.com/JoakoV3/MemoryGame-React/fe1e293e100e3c71c74402a89e4bc40b1e3f2ed2/css3.svg',
    html: 'https://github.com/JoakoV3/MemoryGame-React/blob/master/5847f5bdcef1014c0b5e489c.png?raw=true',
    go: 'https://github.com/JoakoV3/MemoryGame-React/blob/master/Go.png?raw=true',
    rail: 'https://github.com/JoakoV3/MemoryGame-React/blob/master/rails.png?raw=true',
    react: 'https://raw.githubusercontent.com/JoakoV3/MemoryGame-React/fe1e293e100e3c71c74402a89e4bc40b1e3f2ed2/react.svg',
    nodejs: 'https://raw.githubusercontent.com/JoakoV3/MemoryGame-React/master/nodejs.png',
    vue: 'https://github.com/JoakoV3/MemoryGame-React/blob/master/vue.png?raw=true',
  }

  const shuffle = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }
  //recorre el array de imagenes y crea una carta para cada key
  const cards = Object.keys(images).reduce((result, key) => {
    const createCard = () => ({
      id: id++,
      type: key,
      backImg: 'https://github.com/JoakoV3/MemoryGame-React/blob/master/backImage.png?raw=true',
      frontImg: images[key],
      flipped: true
    })
    result.push(createCard())
    result.push(createCard())
    return result
  }, [])
  return shuffle(cards);
}
