import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
import {parse} from 'https://deno.land/x/date_fns/index.js'
import {fr} from 'https://deno.land/x/date_fns/locale/index.js'
import {Game} from './game.ts'

export async function fetchPlayer(username: string) {
  const doc = new DOMParser().parseFromString(await fetch(`https://www.funcraft.net/fr/joueurs?q=${username}`).then(res => res.text()), 'text/html')!

  class Player {
    avatar: string
    grade: string
    registeredAt: Date
    lastConnection: Date
    banned: boolean = false
    gloryCount: number
    totalGameCount: number
    rush: object
    landrush: object
    hikabrain: object
    skywars: object
    octogone: object
    shotcraft: object
    infecte: object
    survival: object
    blitz: object
    PVPSmash: object

    constructor() {
      this.avatar = doc.getElementsByClassName('head')[0].children[0].attributes.src //too long url chépatrokoi
      if (doc.getElementsByClassName('playername')[0].children.length > 2) {
        this.grade = ''
        for (let i = 0; i < doc.getElementsByClassName('playername')[0].children.length - 1; i++) this.grade += doc.getElementsByClassName('playername')[0].children[i].textContent
      } else this.grade = doc.getElementsByClassName('playername')[0].children[0].textContent.trim().split(' ')[0]
      this.registeredAt = parse(doc.getElementsByClassName('tooltips')[0].attributes.title, "dd MMMM yyyy, HH'h'mm", new Date(), {locale: fr})
      this.lastConnection = parse(doc.getElementsByClassName('tooltips')[1].attributes.title, "dd MMMM yyyy, HH'h'mm", new Date(), {locale: fr})
      if (doc.getElementsByClassName('player-alert')[0]) this.banned = true
      this.gloryCount = parseInt(doc.getElementsByClassName('info-stats')[0].children[0].textContent.replace(/\s+/g, '').slice(0, -17))
      this.totalGameCount = parseInt(doc.getElementsByClassName('info-stats')[0].children[1].textContent.slice(0, -14))
      this.rush = new Game(doc, 0)
      this.landrush = new Game(doc, 1)
      this.hikabrain = new Game(doc, 2)
      this.skywars = new Game(doc, 3)
      this.octogone = new Game(doc, 4)
      this.shotcraft = new Game(doc, 5)
      this.infecte = new Game(doc, 6)
      this.survival = new Game(doc, 7)
      this.blitz = new Game(doc, 8)
      this.PVPSmash = new Game(doc, 9)
    }
  }

  return new Player()
}
