export class Game {
  rank: number
  points: number
  games: number
  victories: number
  defeats: number
  playTime: number = 0
  kills: number
  deaths: number
  special: number = 0
  constructor(doc: any, game: number) {
    const selector = doc.getElementsByClassName('player-stats-info')[game]
    let TOP1 = 0
    if (selector.children[4].children[0].textContent === ' TOP 1  ' || (selector.children[4].children[0].textContent === ' Victoires  ' && selector.children.length === 8)) TOP1 = 1
    this.rank = parseInt(selector.children[1].children[1].textContent.trim().slice(0, -3)) || 0
    this.points = parseInt(selector.children[2].children[1].textContent.replace(/\s+/g, '')) || 0
    this.games = parseInt(selector.children[3].children[1].textContent.replace(/\s+/g, '')) || 0
    this.victories = parseInt(selector.children[4].children[1].textContent.replace(/\s+/g, '')) || 0
    if (TOP1 === 0) this.defeats = parseInt(selector.children[5].children[1].textContent.replace(/\s+/g, '')) || 0
    else this.defeats = this.games-this.victories
    if (selector.children[6-TOP1].children[1].textContent.trim().split(' ')[1] !== undefined) this.playTime = parseInt(selector.children[6-TOP1].children[1].textContent.trim().split(' ')[0].slice(0, -1)) * 60 + parseInt(selector.children[6-TOP1].children[1].textContent.trim().split(' ')[1].slice(0, -1))
    this.kills = parseInt(selector.children[7-TOP1].children[1].textContent.replace(/\s+/g, '')) || 0
    this.deaths = parseInt(selector.children[8-TOP1].children[1].textContent.replace(/\s+/g, '')) || 0
    if(selector.children[9-TOP1] !== undefined) this.special = parseInt(selector.children[9-TOP1].children[1].textContent.replace(/\s+/g, '')) || 0
  }
}
