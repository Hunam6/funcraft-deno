import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
import {parse} from 'https://deno.land/x/date_fns/index.js'
import {fr} from 'https://deno.land/x/date_fns/locale/index.js'
import {Game} from './game.ts'

export async function fetchPlayer(username: string, period: number) {
  //TODO: fetch friends
  const doc = new DOMParser().parseFromString(await fetch(`https://www.funcraft.net/fr/joueurs?q=${username}`).then(res => res.text()), 'text/html')!
  if (doc.getElementsByClassName('alert-container').length !== 0) return new Error('Player not found')
  const friend = new DOMParser().parseFromString(await fetch(doc.getElementById('player-friends-content')!.getAttribute('data-url')!).then(res => res.text()), 'text/html')!
  const friends: any[] = []
  const selector = friend.getElementsByClassName('players-heads')[0].children
  for (let i = 0; i < selector.length; i++) {
    friends.push({
      nickname: selector[i].getAttribute('title'),
      avatar: selector[i].children[0].children[0].getAttribute('src'),
      funcraftURL: selector[i].children[0].getAttribute('href')
    })
  }
  class Player {
    avatar: string
    grade: string
    registeredAt: Date
    lastConnection: Date
    banned = false
    gloryCount: number
    totalGameCount: number
    friends: Array<Record<string, string>>
    rushMDT: object //TODO: fix this type warn
    hikaBrain: object
    skyWars: object
    octogone: object
    shootCraft: object
    infecte: object
    survival: object
    blitz: object
    PVPSmash: object
    landRush: object

    constructor(period: number) {
      this.avatar = doc.getElementsByClassName('head')[0].children[0].attributes.src
      if (doc.getElementsByClassName('playername')[0].children.length > 2) {
        this.grade = ''
        for (let i = 0; i < doc.getElementsByClassName('playername')[0].children.length - 1; i++) this.grade += doc.getElementsByClassName('playername')[0].children[i].textContent
      } else this.grade = doc.getElementsByClassName('playername')[0].children[0].textContent.trim().split(' ')[0]
      this.registeredAt = parse(doc.getElementsByClassName('tooltips')[0].attributes.title, "dd MMMM yyyy, HH'h'mm", new Date(), {locale: fr})
      this.lastConnection = parse(doc.getElementsByClassName('tooltips')[1].attributes.title, "dd MMMM yyyy, HH'h'mm", new Date(), {locale: fr})
      if (doc.getElementsByClassName('player-alert')[0]) this.banned = true
      this.gloryCount = parseInt(doc.getElementsByClassName('info-stats')[0].children[0].textContent.replace(/\s+/g, '').slice(0, -17))
      this.totalGameCount = parseInt(doc.getElementsByClassName('info-stats')[0].children[1].textContent.slice(0, -14))
      this.friends = friends
      this.rushMDT = new Game(doc, 0, period)
      this.hikaBrain = new Game(doc, 1, period)
      this.skyWars = new Game(doc, 2, period)
      this.octogone = new Game(doc, 3, period)
      this.shootCraft = new Game(doc, 4, period)
      this.infecte = new Game(doc, 5, period)
      this.survival = new Game(doc, 6, period)
      this.blitz = new Game(doc, 7, period)
      this.PVPSmash = new Game(doc, 8, period)
      this.landRush = new Game(doc, 9, period)
    }
  }

  return new Player(period)
}