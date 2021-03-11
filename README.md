<h1 align='center'><ins>funcraft-deno</ins></h1>
<p align='center'><strong>A Funcraft scraper for Deno</strong></p>

---

#### Example

```typescript
import {fetchPlayer} from 'https://deno.land/x/funcraft/mod.ts'
fetchPlayer('_Hunam').then(player => console.log(player))
```

<details><summary>Output</summary>

  ```typescript
Player {
  avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/_Hunam/m2/a80ac36827ac5d1ee9628574a7c9ec86bf3b9...",
  registeredAt: 2016-09-26T17:20:00.000Z,
  lastConnection: 2021-03-05T20:27:00.000Z,
  banned: 0,
  totalCoins: 344790,
  totalGames: 5535,
  friends: [
    {
      nickname: "Atsumi03",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Atsumi03/s/6f41ab4dbd04dae20ae6b4874607c48944d3...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1664461"
    },
    {
      nickname: "Beathoven",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Beathoven/s/7deac5d89dfbfa27e000fa90effc890bbf9...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1753796"
    },
    {
      nickname: "Charery",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Charery/s/1a949cc4868a49ba6ea1e8d8ba53e0a7c26ea...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1733937"
    },
    {
      nickname: "DreamEit",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/DreamEit/s/69458ffc33757e077bfe7447e3b9124c6e27...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/336598"
    },
    {
      nickname: "GonFreeks",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/GonFreeks/s/645af0a65609aa21683ab73a9ddb9e59648...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1794577"
    },
    {
      nickname: "Hyperii0n",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Hyperii0n/s/36c1b744084684c07585e8404d3b6d4e625...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1387203"
    },
    {
      nickname: "Illamaite",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Illamaite/s/a57739a15f3e646d1175ab5e3662652d6bb...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1972859"
    },
    {
      nickname: "JeuNeAgitE",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/JeuNeAgitE/s/82cbd45b9a5583a67bf262514855afeeba...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1931130"
    },
    {
      nickname: "MaevaVrl",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/MaevaVrl/s/5ee1a4dbee11d7110a6deb457e0e3fce8125...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1826504"
    },
    {
      nickname: "mivillemarco",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/mivillemarco/s/d814cb9164c260d6010fc634f1e00da9...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/50706"
    },
    {
      nickname: "nathanminecraft5",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/nathanminecraft5/s/9b6c4998d452a6e0ce4424b191f7...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/1951633"
    },
    {
      nickname: "NightEmblem",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/NightEmblem/s/274819e5d8c3077d0ae072859a7f84927...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/857268"
    },
    {
      nickname: "Ondune",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Ondune/s/28fad5fb076f1570b6eed7e904c07254857276...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/225700"
    },
    {
      nickname: "SEEEEN__",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/SEEEEN__/s/409da77b4a46b90469aae37feb352fc7d78f...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/715170"
    },
    {
      nickname: "SyriusGang",
      avatar: "https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/SyriusGang/s/377786387096a771cc3b9512b1c50b7958...",
      funcraftURL: "https://www.funcraft.net/fr/joueur/253809"
    }
  ],
  rushRETRO: {},
  rushMDT: {
    glory: 4452,
    gamesPlayed: 54,
    playTime: 20472,
    kills: 79,
    deaths: 178,
    brokenBeds: 46,
    gamesWon: 16,
    gamesLost: 38,
    rank: 53619,
    color: "947001"
  },
  hikaBrain: {
    glory: 75574.82,
    gamesPlayed: 557,
    playTime: 127867,
    kills: 6438,
    deaths: 8477,
    gamesWon: 330,
    gamesLost: 227,
    rank: 7095,
    color: "666c17"
  },
  skyWars: {
    glory: 14698.33,
    gamesPlayed: 696,
    playTime: 77418,
    kills: 360,
    deaths: 659,
    gamesWon: 36,
    gamesLost: 660,
    rank: 14596,
    color: "09467c"
  },
  octogone: {
    glory: 2548.36,
    gamesPlayed: 32,
    playTime: 4301,
    kills: 41,
    deaths: 31,
    gamesWon: 1,
    gamesLost: 31,
    damages: 1728.21,
    rank: 11443,
    color: "2c1760"
  },
  shootCraft: {
    glory: 1953.8,
    gamesPlayed: 41,
    playTime: 9644,
    kills: 592,
    deaths: 686,
    gamesWon: 3,
    gamesLost: 38,
    rank: 3902,
    color: "184953"
  },
  infected: {
    glory: 22.15,
    gamesPlayed: 6,
    playTime: 871,
    kills: 1,
    deaths: 10,
    gamesLost: 6,
    gamesWon: 0,
    rank: 46567,
    color: "2e6218"
  },
  survival: {
    glory: 605.62,
    gamesPlayed: 14,
    playTime: 3556,
    kills: 4,
    deaths: 14,
    gamesLost: 14,
    gamesWon: 0,
    rank: 11862,
    color: "8c4701"
  },
  blitz: {
    glory: 428333.93,
    gamesPlayed: 4118,
    playTime: 1191142,
    kills: 15397,
    deaths: 16921,
    nexusJumps: 3444,
    gamesWon: 2378,
    gamesLost: 1740,
    rank: 38,
    color: "6e1a0a"
  },
  PVPSmash: {
    glory: 142.58,
    gamesPlayed: 17,
    playTime: 863,
    kills: 14,
    deaths: 17,
    gamesLost: 17,
    damages: 530.8,
    gamesWon: 0,
    rank: 27971,
    color: "54351c"
  },
  landRush: {},
  grade: "Mini-VIP"
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
