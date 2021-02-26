import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
import {Staff} from './staff.ts'

export async function fetchServerInfo() {
  const doc = new DOMParser().parseFromString(await fetch('https://www.funcraft.net/fr/joueurs').then(res => res.text()), 'text/html')!
  return new class Server {
    connectedPlayersRecord: number
    registeredPlayers: number
    connectedPlayers: number
    oldServer: Record<string, number>
    staff = new Staff(doc)
    constructor() {
      this.connectedPlayersRecord = parseInt(doc.querySelectorAll('.gstat-item')[0].children[0].textContent.replace(/ /g, ''))
      this.registeredPlayers = parseInt(doc.querySelectorAll('.gstat-item')[1].children[0].textContent.replace(/ /g, ''))
      this.connectedPlayers = parseInt(doc.querySelectorAll('.gstat-item')[2].children[0].textContent.replace(/ /g, ''))
      this.oldServer = {
        connectedPlayersRecord: parseInt(doc.querySelectorAll('.gstat-item')[3].children[0].textContent.replace(/ /g, '')),
        registeredPlayers: parseInt(doc.querySelectorAll('.gstat-item')[4].children[0].textContent.replace(/ /g, ''))
      }
    }
  }
}