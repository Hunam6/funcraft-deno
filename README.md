# funcraft-deno

## A Funcraft statistics scraper for Deno

---

### Usage

#### Example

```typescript
import {fetchPlayer} from 'https://deno.land/x/funcraft@1.1.0/mod.ts'
fetchPlayer('_Hunam').then(player => console.log(player))
```

<details><summary>Output</summary>

  ```typescript
Player {
  banned: 0,
  avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/_Hunam/m2/a80ac36827ac5d1ee9628574a7c9ec86bf3b92d8",
  grade: "Mini-VIP",
  registeredAt: 2016-09-26T17:20:00.000Z,
  lastConnection: 2021-02-28T18:50:00.000Z,
  gloryCount: 344534,
  totalGameCount: 5532,
  friends: [
    {
      nickname: "Atsumi03",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Atsumi03/s/6f41ab4dbd04dae20ae6b4874607c48944d3379d",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1664461"
    },
    {
      nickname: "Beathoven",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Beathoven/s/7deac5d89dfbfa27e000fa90effc890bbf9ef7e2",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1753796"
    },
    {
      nickname: "Charery",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Charery/s/1a949cc4868a49ba6ea1e8d8ba53e0a7c26eab10",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1733937"
    },
    {
      nickname: "DreamEit",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/DreamEit/s/69458ffc33757e077bfe7447e3b9124c6e274a27",
      funcraftURL: "https://www.funcraft.net/fr/joueur/336598"
    },
    {
      nickname: "GonFreeks",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/GonFreeks/s/645af0a65609aa21683ab73a9ddb9e59648e25b5",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1794577"
    },
    {
      nickname: "Hyperii0n",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Hyperii0n/s/36c1b744084684c07585e8404d3b6d4e62569ad0",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1387203"
    },
    {
      nickname: "Illamaite",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Illamaite/s/a57739a15f3e646d1175ab5e3662652d6bbfba1e",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1972859"
    },
    {
      nickname: "JeuNeAgitE",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/JeuNeAgitE/s/82cbd45b9a5583a67bf262514855afeeba222b15",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1931130"
    },
    {
      nickname: "MaevaVrl",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/MaevaVrl/s/5ee1a4dbee11d7110a6deb457e0e3fce8125ff3a",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1826504"
    },
    {
      nickname: "mivillemarco",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/mivillemarco/s/d814cb9164c260d6010fc634f1e00da9aca2c017",
      funcraftURL: "https://www.funcraft.net/fr/joueur/50706"
    },
    {
      nickname: "nathanminecraft5",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/nathanminecraft5/s/9b6c4998d452a6e0ce4424b191f717d3462fb42c",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1951633"
    },
    {
      nickname: "NightEmblem",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/NightEmblem/s/274819e5d8c3077d0ae072859a7f8492704e1de7",
      funcraftURL: "https://www.funcraft.net/fr/joueur/857268"
    },
    {
      nickname: "Ondune",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Ondune/s/28fad5fb076f1570b6eed7e904c072548572764d",
      funcraftURL: "https://www.funcraft.net/fr/joueur/225700"
    },
    {
      nickname: "SEEEEN__",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/SEEEEN__/s/409da77b4a46b90469aae37feb352fc7d78f42da",
      funcraftURL: "https://www.funcraft.net/fr/joueur/715170"
    },
    {
      nickname: "SyriusGang",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/SyriusGang/s/377786387096a771cc3b9512b1c50b79585a568c",
      funcraftURL: "https://www.funcraft.net/fr/joueur/253809"
    }
  ],
  rushRETRO: Game {
    playTime: 0,
    special: 0,
    rank: 0,
    points: 0,
    games: 0,
    victories: 0,
    defeats: 0,
    kills: 0,
    deaths: 0,
    color: "856400"
  },
  rushMDT: Game {
    playTime: 341,
    special: 46,
    rank: 53414,
    points: 4452,
    games: 54,
    victories: 16,
    defeats: 38,
    kills: 79,
    deaths: 178,
    color: "947001"
  },
  hikaBrain: Game {
    playTime: 2131,
    special: 0,
    rank: 7133,
    points: 75575,
    games: 557,
    victories: 330,
    defeats: 227,
    kills: 6438,
    deaths: 8477,
    color: "666c17"
  },
  skyWars: Game {
    playTime: 1290,
    special: 0,
    rank: 14583,
    points: 14698,
    games: 696,
    victories: 36,
    defeats: 660,
    kills: 360,
    deaths: 659,
    color: "09467c"
  },
  octogone: Game {
    playTime: 71,
    special: 1728,
    rank: 11485,
    points: 2548,
    games: 32,
    victories: 1,
    defeats: 31,
    kills: 41,
    deaths: 31,
    color: "2c1760"
  },
  shootCraft: Game {
    playTime: 160,
    special: 0,
    rank: 3895,
    points: 1954,
    games: 41,
    victories: 3,
    defeats: 38,
    kills: 592,
    deaths: 686,
    color: "184953"
  },
  infected: Game {
    playTime: 14,
    special: 0,
    rank: 46215,
    points: 22,
    games: 6,
    victories: 0,
    defeats: 6,
    kills: 1,
    deaths: 10,
    color: "2e6218"
  },
  survival: Game {
    playTime: 59,
    special: 0,
    rank: 11851,
    points: 606,
    games: 14,
    victories: 0,
    defeats: 14,
    kills: 4,
    deaths: 14,
    color: "8c4701"
  },
  blitz: Game {
    playTime: 19827,
    special: 3443,
    rank: 38,
    points: 427582,
    games: 4115,
    victories: 2376,
    defeats: 1739,
    kills: 15362,
    deaths: 16905,
    color: "6e1a0a"
  },
  PVPSmash: Game {
    playTime: 14,
    special: 531,
    rank: 27934,
    points: 143,
    games: 17,
    victories: 0,
    defeats: 17,
    kills: 14,
    deaths: 17,
    color: "54351c"
  },
  landRush: Game {
    playTime: 0,
    special: 0,
    rank: 0,
    points: 0,
    games: 0,
    victories: 0,
    defeats: 0,
    kills: 0,
    deaths: 0,
    color: "947001"
  }
}
  ```

</details>

#### Doc

```typescript
fetchPlayer(username: string, period: number)
```

**|** `username` is the player username

**|** `period`*(optional, default = `0`)* where `0` is for the stats of always and `3` stats from 3 months ago

**↳** return a player's stats

```typescript
fetchLeaderboard(game: string, period: number | string)
```

**|** `game` is the game name

**|** `period`*(optional, default = `0`)* where `0` is for the stats of always and `3` stats from 3 months ago, it can also be a specific date in this format `yyyy-MM` (see [ref](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table))

**↳** return a game's leaderboard

```typescript
fetchServerInfo()
```

**↳** return server's stats & infos

### Credits

Thanks [@Androz](https://github.com/Androz2091) for it's [orginal](https://github.com/Androz2091/funcraft) Funcraft scraper written for NodeJS and now deprecated.
