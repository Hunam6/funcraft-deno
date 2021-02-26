import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
import {format, sub} from 'https://deno.land/x/date_fns/index.js'

export async function fetchLeaderboard(game: string, period: number | string = 0) {
  //TODO: error handling
  if (typeof period !== 'string')
    if (period !== 0) period = format(sub(new Date(), {months: period}), 'yyyy-MM', {})
    else period = 'always'
  const doc = new DOMParser().parseFromString(await fetch(`https://www.funcraft.net/fr/classement/${game}/${period}?sendData=1`).then(res => res.text()), 'text/html')!
  const lb = []
  let top1 = 0
  if (doc.querySelector('thead')!.children[0].children[4].textContent === 'TOP 1' || game === 'infected') top1 = 1
  for (let i = 0; i < doc.querySelector('tbody')!.children.length; i++) {
    lb.push({
      nickname: doc.querySelector('tbody')!.children[i].children[1].children[0].textContent.trim(),
      funcraftURL: doc.querySelector('tbody')!.children[i].children[1].children[0].getAttribute('href'),
      points: parseInt(doc.querySelector('tbody')!.children[i].children[2].textContent.replace(/ /g, '')),
      parties: parseInt(doc.querySelector('tbody')!.children[i].children[3].textContent.replace(/ /g, '')),
      victories: parseInt(doc.querySelector('tbody')!.children[i].children[4].textContent.replace(/ /g, '')),
      defeats: parseInt(doc.querySelector('tbody')!.children[i].children[3].textContent.replace(/ /g, '')) - parseInt(doc.querySelector('tbody')!.children[i].children[4].textContent.replace(/ /g, '')),
      playTime: parseInt(doc.querySelector('tbody')!.children[i].children[6 - top1].textContent.trim().split(' ')[0].slice(0, -1)) * 60 + parseInt(doc.querySelector('tbody')!.children[i].children[6 - top1].textContent.trim().split(' ')[1].slice(0, -1)),
      kills: parseInt(doc.querySelector('tbody')!.children[i].children[7 - top1].textContent.replace(/ /g, '')),
      deaths: parseInt(doc.querySelector('tbody')!.children[i].children[8 - top1].textContent.replace(/ /g, '')),
      special: parseInt(doc.querySelector('tbody')!.children[i].children[9 - top1].textContent.replace(/ /g, ''))
    })
  }
  return lb
}
