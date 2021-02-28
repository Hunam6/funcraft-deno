import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
import {parse} from 'https://deno.land/x/date_fns/index.js'
import {fr} from 'https://deno.land/x/date_fns/locale/index.js'
import {Game} from './game.ts'

export async function fetchPlayer(username: string, period = 0) {
  const doc = new DOMParser().parseFromString(await fetch(`https://www.funcraft.net/fr/joueurs?q=${username}`).then(res => res.text()), 'text/html')!
  if (doc.getElementsByClassName('alert-container').length !== 0) return new Error('Player not found')
  const selector = new DOMParser().parseFromString(await fetch(doc.getElementById('player-friends-content')!.getAttribute('data-url')!).then(res => res.text()), 'text/html')!.getElementsByClassName('players-heads')[0].children
  const friends: Array<Record<string, string>> = []
  for (let i = 0; i < selector.length; i++) {
    friends.push({
      nickname: selector[i].getAttribute('title')!,
      avatar: selector[i].children[0].children[0].getAttribute('src')!,
      funcraftURL: selector[i].children[0].getAttribute('href')!
    })
  }
  class Player {
    avatar: string
    grade: string
    registeredAt: Date
    lastConnection: Date
    banned = 0
    gloryCount: number
    totalGameCount: number
    friends: Array<Record<string, string>>
    rushRETRO: Game
    rushMDT: Game
    hikaBrain: Game
    skyWars: Game
    octogone: Game
    shootCraft: Game
    infected: Game
    survival: Game
    blitz: Game
    PVPSmash: Game
    landRush: Game

    constructor(period: number) {
      this.avatar = doc.getElementsByClassName('head')[0].children[0].attributes.src
      if (doc.getElementsByClassName('playername')[0].children.length > 2) {
        this.grade = ''
        for (let i = 0; i < doc.getElementsByClassName('playername')[0].children.length - 1; i++) this.grade += doc.getElementsByClassName('playername')[0].children[i].textContent
      } else this.grade = doc.getElementsByClassName('playername')[0].children[0].textContent.trim().split(' ')[0]
      this.registeredAt = parse(doc.getElementsByClassName('tooltips')[0].attributes.title, "dd MMMM yyyy, HH'h'mm", new Date(), {locale: fr})
      this.lastConnection = parse(doc.getElementsByClassName('tooltips')[1].attributes.title, "dd MMMM yyyy, HH'h'mm", new Date(), {locale: fr})
      if (doc.querySelector('.player-alert')! !== null)
        if (doc.querySelector('.player-alert')!.textContent.includes('temporairement')) this.banned = 1
        else this.banned = 2
      this.gloryCount = parseInt(doc.getElementsByClassName('info-stats')[0].children[0].textContent.replace(/\s+/g, '').slice(0, -17))
      this.totalGameCount = parseInt(doc.getElementsByClassName('info-stats')[0].children[1].textContent.slice(0, -14))
      this.friends = friends
      this.rushRETRO = new Game(doc, 0, period)
      this.rushMDT = new Game(doc, 1, period)
      this.hikaBrain = new Game(doc, 2, period)
      this.skyWars = new Game(doc, 3, period)
      this.octogone = new Game(doc, 4, period)
      this.shootCraft = new Game(doc, 5, period)
      this.infected = new Game(doc, 6, period)
      this.survival = new Game(doc, 7, period)
      this.blitz = new Game(doc, 8, period)
      this.PVPSmash = new Game(doc, 9, period)
      this.landRush = new Game(doc, 10, period)
    }
  }
  return new Player(period)
}
