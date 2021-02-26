import {Document} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export class Staff {
  admin: Array<Record<string, string>>
  superModo: Array<Record<string, string>>
  modo: Array<Record<string, string>>
  helper: Array<Record<string, string>>
  youtuber: Array<Record<string, string>>
  builder: Array<Record<string, string>>
  designer: Array<Record<string, string>>
  constructor(doc: Document) {
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
    this.admin = category(0)
    this.superModo = category(1)
    this.modo = category(2)
    this.helper = category(3)
    this.youtuber = category(4)
    this.builder = category(5)
    this.designer = category(6)
  }
}