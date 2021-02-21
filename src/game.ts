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
  constructor(doc: any, game: number, period: number) { //TODO: games ratios
    const selector = doc.getElementsByClassName('player-stats-info')[game].children
    let top1 = 0
    let plus = ''
    let always = 1
    if (period > 0) {
      plus = `.children[${period-1}]`
      always = 2
    }
    if (selector[4].children[0].textContent === ' TOP 1  ' || (selector[4].children[0].textContent === ' Victoires  ' && selector.length === 8)) top1 = 1
    this.rank = parseInt(new Function('selector', 'plus', 'always', 'return (selector[1].children[always]' + plus + '.textContent.trim().slice(0, -3))')(selector, plus, always)) || 0
    this.points = parseInt(new Function('selector', 'plus', 'always', 'return (selector[2].children[always]' + plus + '.textContent.replace(/ /g,""))')(selector, plus, always)) || 0
    this.games = parseInt(new Function('selector', 'plus', 'always', 'return (selector[3].children[always]' + plus + '.textContent.replace(/ /g,""))')(selector, plus, always)) || 0
    this.victories = parseInt(new Function('selector', 'plus', 'always', 'return (selector[4].children[always]' + plus + '.textContent.replace(/ /g,""))')(selector, plus, always)) || 0
    if (top1 === 0) this.defeats = parseInt(new Function('selector', 'plus', 'always', 'return (selector[5].children[always]' + plus + '.textContent.replace(/ /g,""))')(selector, plus, always)) || 0
    else this.defeats = this.games - this.victories
    if (new Function('selector', 'plus', 'always', 'top1', 'return (selector[6 - top1].children[always]' + plus + '.textContent.trim().split(" ")[1])')(selector, plus, always, top1) !== undefined) this.playTime = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[6 - top1].children[always]' + plus + '.textContent.trim().split(" ")[0].slice(0, -1))')(selector, plus, always, top1)) * 60 + parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[6 - top1].children[always]' + plus + '.textContent.trim().split(" ")[1].slice(0, -1))')(selector, plus, always, top1))
    this.kills = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[7 - top1].children[always]' + plus + '.textContent.replace(/ /g, ""))')(selector, plus, always, top1)) || 0
    this.deaths = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[8 - top1].children[always]' + plus + '.textContent.replace(/ /g, ""))')(selector, plus, always, top1)) || 0
    if (selector[9 - top1] !== undefined) this.special = parseInt(new Function('selector', 'plus', 'always', 'top1', 'return (selector[9 - top1].children[always]' + plus + '.textContent.replace(/ /g, ""))')(selector, plus, always, top1)) || 0
  }
}
