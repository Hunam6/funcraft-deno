import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export async function fetchServerInfo() {
  //TODO: super secret stats
  const doc = new DOMParser().parseFromString(await fetch('https://www.funcraft.net/fr/joueurs').then(res => res.text()), 'text/html')!
  const data = JSON.parse(doc.querySelectorAll('script')[6]!.textContent.substring(25))

  const category = (category: number) => {
    const persons = []
    for (let i = 0; i < doc.querySelectorAll('.players-heads')[category].children.length; i++) {
      persons.push({
        nickname: doc.querySelectorAll('.players-heads')[category].children[i].getAttribute('title')!,
        avatar: doc.querySelectorAll('.players-heads')[category].children[i].children[0].children[0].getAttribute('src')!,
        funcraftURL: doc.querySelectorAll('.players-heads')[category].children[i].children[0].getAttribute('href')!
      })
    }
    return persons
  }
  class Staff {
    admin = category(0)
    superModo = category(1)
    modo = category(2)
    helper = category(3)
    youtuber = category(4)
    builder = category(5)
    designer = category(6)
  }

  class ConnectedPlayers {
    total = parseInt(doc.querySelectorAll('.gstat-item')[2].children[0].textContent.replace(/ /g, ''))
    rushRETRO = data[0].data.pop()[1]
    rushMDT = data[1].data.pop()[1]
    hikaBrain = data[2].data.pop()[1]
    skyWars = data[3].data.pop()[1]
    octogone = data[4].data.pop()[1]
    shootCraft = data[5].data.pop()[1]
    infected = data[6].data.pop()[1]
    survival = data[7].data.pop()[1]
    freeCube = data[8].data.pop()[1]
    blitz = data[9].data.pop()[1]
    PVPSmash = data[10].data.pop()[1]
    landRush = data[11].data.pop()[1]
    other = data[12].data.pop()[1]
  }

  return new (class Server {
    connectedPlayersRecord = parseInt(doc.querySelectorAll('.gstat-item')[0].children[0].textContent.replace(/ /g, ''))
    registeredPlayers = parseInt(doc.querySelectorAll('.gstat-item')[1].children[0].textContent.replace(/ /g, ''))
    connectedPlayers = new ConnectedPlayers()
    oldServer = {
      connectedPlayersRecord: parseInt(doc.querySelectorAll('.gstat-item')[3].children[0].textContent.replace(/ /g, '')),
      registeredPlayers: parseInt(doc.querySelectorAll('.gstat-item')[4].children[0].textContent.replace(/ /g, ''))
    }
    staff = new Staff()
  })()
}
