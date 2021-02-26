import {Document} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export class Game {
  rank: number
  points: number
  games: number
  victories: number
  defeats: number
  playTime = 0
  kills: number
  deaths: number
  special = 0
  color: string
  constructor(doc: Document, game: number, period: number) {
    //TODO: games ratios (I'm pretty sure we'll have to wait for https://github.com/b-fuze/deno-dom/issues/35)
    const selector = doc.getElementsByClassName('player-stats-info')[game].children
    let top1 = 0
    let plus = ''
    let always = 1
    if (period > 0) {
      plus = `.children[${period - 1}]`
      always = 2
    }
    const colors: Record<number, string> = {
      0: '#856400',
      1: '#666c17',
      2: '#09467c',
      3: '#2c1760',
      4: '#184953',
      5: '#2e6218',
      6: '#8c4701',
      7: '#6e1a0a',
      8: '#54351c',
      9: '#947001'
    }
    if (selector[4].children[0].textContent === ' TOP 1  ' || (selector[4].children[0].textContent === ' Victoires  ' && selector.length === 8)) top1 = 1
    this.rank = parseInt(new Function('selector', 'plus', 'always', 'return (selector[1].children[always]' + plus + '.textContent.trim().slice(0, -3))')(selector, plus, always)) || 0
    this.points = parseInt(new Function('selector', 'plus', 'always', 'return (selector[2].children[always]' + plus + '.textContent.replace(/ /g,""))')(selector, plus, always)) || 0
    this.games = parseInt(new Function('selector', 'plus', 'always', 'return (selector[3].children[always]' + plus + '.textContent.replace(/ /g,""))')(selector, plus, always)) || 0
    this.victories = parseInt(new Function('selector', 'plus', 'always', 'return (selector[4].children[always]' + plus + '.textContent.replace(/ /g,""))')(selector, plus, always)) || 0
    this.defeats = this.games - this.victories
    if (new Function('selector', 'plus', 'always', 'top1', 'return (selector[6 - top1].children[always]' + plus + '.textContent.trim().split(" ")[1])')(selector, plus, always, top1) !== undefined) this.playTime = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[6 - top1].children[always]' + plus + '.textContent.trim().split(" ")[0].slice(0, -1))')(selector, plus, always, top1)) * 60 + parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[6 - top1].children[always]' + plus + '.textContent.trim().split(" ")[1].slice(0, -1))')(selector, plus, always, top1))
    this.kills = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[7 - top1].children[always]' + plus + '.textContent.replace(/ /g, ""))')(selector, plus, always, top1)) || 0
    this.deaths = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[8 - top1].children[always]' + plus + '.textContent.replace(/ /g, ""))')(selector, plus, always, top1)) || 0
    if (selector[9 - top1] !== undefined) this.special = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[9 - top1].children[always]' + plus + '.textContent.replace(/ /g, ""))')(selector, plus, always, top1)) || 0
    this.color = colors[game].substring(1)
  }
}
