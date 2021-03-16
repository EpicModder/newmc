import swal from 'sweetalert'
import nameList from './nameList.js'

function UrlParams (game) {
  return new Promise((resolve) => {
    let finalName = ''
    finalName = nameList[Math.floor(Math.random() * nameList.length)]
    finalName += nameList[Math.floor(Math.random() * nameList.length)]

    game.nick = new URL(document.location).searchParams.get('nick')
    game.server = new URL(document.location).searchParams.get('server')
    game.serverPort = new URL(document.location).searchParams.get('port')
    game.premium = new URL(document.location).searchParams.get('premium')
    let reload = false
    if (game.nick === '' || game.nick === null) {
      reload = true
      game.nick = finalName
    }
    if (game.server === '' || game.server === null) {
      reload = true
      game.server = game.production
        ? game.servers.production[0]
        : game.servers.development[0]
    }
    if (game.serverPort === '' || game.serverPort === null) {
      reload = true
      game.serverPort = game.production
        ? game.servers.production[1]
        : game.servers.development[1]
    }
    if (game.premium === '' || game.premium === null) {
      reload = true
      game.premium = 'false'
    }
    if (reload) {
      document.location.href = `?server=${game.server}&port=${game.serverPort}&nick=${game.nick}&premium=${game.premium}`
    } else {
      if (game.premium === 'true') {
        swal({
          text: 'Enter password for premium account',
          content: 'input',
          button: {
            text: 'Login'
          }
        }).then((password) => {
          resolve(password)
        })
      } else {
        resolve(null)
      }
    }
  })
}

export { UrlParams }
