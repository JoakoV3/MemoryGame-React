export function buildCards() {
  let id = 0
  const images = {
    angular: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    css: 'https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg',
    html: 'https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png',
    go: 'https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png',
    rail: 'https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png',
    react: 'https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg',
    nodejs: 'https://www.ambientinfotech.com/wp-content/uploads/2020/03/node-js.png',
    vue: 'https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png',
  }

  //recorre el array de imagenes y crea una carta para cada key
  const cards = Object.keys(images).reduce((result, key) => {
    const createCard = () => ({
      id: id++,
      type: key,
      backImg: 'https://www.shareicon.net/data/256x256/2015/10/07/113773_tags_512x512.png',
      frontImg: images[key],
      flipped: true
    })
    result.push(createCard())
    result.push(createCard())
    return result
  }, [])
  return cards
}
