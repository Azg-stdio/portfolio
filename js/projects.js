/* Project data. The page renders every card and window from this list.
 *
 *   id       slug, used for the deep link (#p=slug) and image file names
 *   section  games | web | building
 *   tag      short label on the card (optional)
 *   intro    first line of the window. `jam` + `jamUrl` turn the jam name into a link.
 *   text     description paragraphs
 *   genre / role
 *   thumb    640x400 image. Leave it out to get a placeholder tile.
 *   shots    gallery images
 *   links    [{ label, href }]  first one is the main button
 */
window.PROJECTS = [

  /* ───────── GAMES ───────── */
  {
    id: "atopogas", section: "games", title: "A Topo Gas!", tag: "2026",
    intro: "A Topo Gas! is a game created for a 48 hour game jam in 2026.",
    text: [
      "You are a blind mole digging down to rescue your child. Dig anywhere you want, but every move costs stamina, so use your sonar to find the softest path."
    ],
    genre: "Roguelite, Action", role: "Programmer, Game Design, UI",
    thumb: "assets/img/projects/atopogas-thumb.webp",
    shots: ["assets/img/projects/atopogas-1.webp", "assets/img/projects/atopogas-2.webp", "assets/img/projects/atopogas-3.webp"],
    links: []
  },
  {
    id: "insight", section: "games", title: "Insight", tag: "1st place",
    intro: "Insight is a game created for the", jam: "Game Jam Lab 2020", jamUrl: "https://itch.io/jam/game-jam-lab-2020/rate/816274",
    text: [
      "You’re a child running, you still have a bubble of “innocence” that surrounds you, but sooner or later, reality is going to haunt you. Inspired by the art work of Edgar Alvarez, Raquel Forne and Alvaro Barrios.",
      "Winner of the first place at the Game Jam Lab 2020, organised by Museo La Tertulia."
    ],
    genre: "Stealth, Social Issues", role: "Programmer, Level Design, VFX",
    thumb: "assets/img/projects/insight-thumb.webp",
    shots: ["assets/img/projects/insight-1.webp", "assets/img/projects/insight-2.webp", "assets/img/projects/insight-3.webp"],
    links: [{ label: "Play Game", href: "https://nicasanovac.itch.io/insight" }]
  },
  {
    id: "bubble", section: "games", title: "Bubble Heist", tag: "Released",
    intro: "Bubble Heist is a mobile game created by me, published on the Play Store for 3 years.",
    text: [
      "You play as a frog that must protect its lake from the frightful bubbles, test your skills by passing more than 50 levels, or surviving as long as possible in survival mode."
    ],
    genre: "Action, Casual", role: "Programmer, Artist, Game Design, Level Design, VFX, UI Design",
    thumb: "assets/img/projects/bubble-thumb.webp",
    shots: ["assets/img/projects/bubble-1.webp", "assets/img/projects/bubble-2.webp", "assets/img/projects/bubble-3.webp", "assets/img/projects/bubble-4.webp"],
    links: []
  },
  {
    id: "weather", section: "games", title: "Crazy Weather", tag: "2020",
    intro: "Crazy Weather is a game created for the", jam: "GMTK 2020", jamUrl: "https://itch.io/jam/gmtk-2020",
    text: [
      "You are a traveler who has to face in adversity of the weather, using the open weather map API we were able to take the temperature, wind speed and other data making the weather of a chosen random city directly affect the levels of our game."
    ],
    genre: "Action, Casual", role: "Programmer, Game Design, VFX",
    thumb: "assets/img/projects/weather-thumb.webp",
    shots: ["assets/img/projects/weather-1.webp", "assets/img/projects/weather-2.webp", "assets/img/projects/weather-3.webp"],
    links: [{ label: "Play Game", href: "https://camilavizard.itch.io/crazyweather" }]
  },
  {
    id: "veci", section: "games", title: "La Veci", tag: "2020",
    intro: "La Veci is a game created for", jam: "Stay At Home GameJam", jamUrl: "https://itch.io/jam/stayathomebga",
    text: [
      "This game is a twist on cooking games, since it brings elements of social criticism and reality of our country into a simple gameplay. Your mission is to provide delicious food to customers and have the most money at the end of the day."
    ],
    genre: "Cooking, RPG", role: "Programmer, Game Design",
    thumb: "assets/img/projects/veci-thumb.webp",
    shots: ["assets/img/projects/veci-1.webp"],
    links: [{ label: "Play Game", href: "https://astaroth12334.itch.io/la-veci" }]
  },
  {
    id: "taco", section: "games", title: "Taco", tag: "2019",
    intro: "Taco is a game created on the", jam: "Global Game Jam 2019", jamUrl: "https://globalgamejam.org/2019/games/taco",
    text: [
      "Taco is an adventure game where you take the role of Taco, a dog who's trying to get home. Use Taco's smelling and hearing abilities to solve puzzling situations and make your way back home!"
    ],
    genre: "RPG, Adventure", role: "Programmer, Level Design",
    thumb: "assets/img/projects/taco-thumb.webp",
    shots: ["assets/img/projects/taco-1.webp", "assets/img/projects/taco-2.webp", "assets/img/projects/taco-3.webp"],
    links: [{ label: "Game Page", href: "https://globalgamejam.org/2019/games/taco" }]
  },
  {
    id: "regum", section: "games", title: "Re-GUM", tag: "2019",
    intro: "Re-GUM is a game created for the", jam: "Global Game Jam 2019", jamUrl: "https://morevica.itch.io/re-gum",
    text: [
      "Re-GUM is about a bubble gum monster who does not have a body in consequence of a bad programmer who lost the parts. While this developer fixes the world, Bubble gum monster will have to find the parts of his body, rebuild himself and explore new abilities and places with each part and each fix. The player will start being a ball, and while exploring the world the monster will be taking form."
    ],
    genre: "RPG, Adventure, Puzzle", role: "Programmer",
    thumb: "assets/img/projects/regum-thumb.webp",
    shots: ["assets/img/projects/regum-1.webp", "assets/img/projects/regum-2.webp", "assets/img/projects/regum-3.webp", "assets/img/projects/regum-4.webp"],
    links: [{ label: "Play Game", href: "https://morevica.itch.io/re-gum" }]
  },
  {
    id: "yeison", section: "games", title: "El Viaje de Yeison", tag: "2018",
    intro: "El Viaje de Yeison is a submission for the", jam: "GameJam Uniandes 2018", jamUrl: "https://itch.io/jam/gamejam-uniandes-2018",
    text: [
      "Yeison is going back home, when suddenly is taken to another dimension, you must switch between dimensions to go through the different levels and help yeison to escape."
    ],
    genre: "Puzzle, Platformer", role: "Artist",
    thumb: "assets/img/projects/yeison-thumb.webp",
    shots: ["assets/img/projects/yeison-1.webp", "assets/img/projects/yeison-2.webp", "assets/img/projects/yeison-3.webp", "assets/img/projects/yeison-4.webp"],
    links: [{ label: "Play Game", href: "https://chiminguito.itch.io/el-viaje-de-yeison" }]
  },
  {
    id: "besto", section: "games", title: "Besto Gamu", tag: "2019",
    intro: "Besto Gamu is an entry for the", jam: "Ludum Dare 45", jamUrl: "https://ldjam.com/events/ludum-dare/45",
    text: ["Made in 72 hours for the theme “Start with nothing”."],
    genre: "Game Jam", role: "Programmer",
    shots: [],
    links: [{ label: "Source Code", href: "https://github.com/Azg-stdio/besto-gamu" }]
  },

  /* ───────── WEB ───────── */
  {
    id: "verifai", section: "web", title: "VerifAI", tag: "Live",
    intro: "VerifAI is a WhatsApp bot that checks whether a news item is true.",
    text: [
      "Forward a chain message, a link or an image and it answers in seconds with a verdict and its sources. Made for Colombia, in Spanish."
    ],
    genre: "Web, Chat Bot", role: "Programmer, Product",
    thumb: "assets/img/projects/verifai-thumb.webp",
    shots: ["assets/img/projects/verifai-1.webp", "assets/img/projects/verifai-2.webp", "assets/img/projects/verifai-3.webp", "assets/img/projects/verifai-4.webp"],
    links: [{ label: "Visit Website", href: "https://verifaicheck.com" }]
  },
  {
    id: "soupled", section: "web", title: "Soupled", tag: "Playable",
    intro: "Soupled is a multiplayer word game you can play right now in your browser.",
    text: [
      "Swim a rubber duckie through a bowl of alphabet soup, collect pasta letters and spell words for points before the clock runs out. Play with friends in a private room or jump into a quick match."
    ],
    genre: "Words, Multiplayer Online", role: "Programmer, Game Design",
    thumb: "assets/img/projects/soupled-thumb.webp",
    shots: ["assets/img/projects/soupled-1.webp"],
    links: [{ label: "Play Game", href: "https://soupled.verifaicheck.com" }]
  },
  {
    id: "camello", section: "web", title: "camello", tag: "Open source",
    intro: "camello is a command line tool to look for remote jobs from Colombia.",
    text: [
      "It downloads job postings from public feeds, keeps them in a local database and helps you keep track of your applications. Built with TypeScript on Node.js with zero runtime dependencies."
    ],
    genre: "Tools, Open Source", role: "Programmer",
    thumb: "assets/img/projects/camello-thumb.webp",
    shots: ["assets/img/projects/camello-1.webp"],
    links: [{ label: "Source Code", href: "https://github.com/Azg-stdio/camello" }]
  },
  {
    id: "botcounter", section: "web", title: "Bot Detector", tag: "Open source",
    intro: "A tool that flags suspicious accounts in YouTube comments.",
    text: [
      "Paste a video link and it scores every comment, with charts and a table to review the results by hand. Built in Python during the 2026 Colombian elections."
    ],
    genre: "Tools, Data", role: "Programmer",
    shots: [],
    links: [{ label: "Source Code", href: "https://github.com/Azg-stdio/colombian-bot-counter" }]
  },
  {
    id: "candidatos", section: "web", title: "Candidatos 2026", tag: "Open source",
    intro: "A website comparing the candidates of the 2026 Colombian presidential election.",
    text: [
      "Positions, track record and proposals side by side, every claim with its source. Built with Astro."
    ],
    genre: "Web, Data", role: "Programmer",
    shots: [],
    links: [{ label: "Source Code", href: "https://github.com/Azg-stdio/candidatos" }]
  },
  {
    id: "lorstats", section: "web", title: "LoR Stats", tag: "2020 - 2022",
    intro: "LoR Stats is a match history and stats tracker for Legends of Runeterra.",
    text: [
      "Look up a player and browse their matches, decks and win rates. Built with Python, Flask and Firebase, officially associated with Riot Games, with a companion Discord bot distributed via top.gg."
    ],
    genre: "Web, Stats", role: "Programmer",
    thumb: "assets/img/projects/lorstats-thumb.webp",
    shots: ["assets/img/projects/lorstats-1.webp", "assets/img/projects/lorstats-2.webp", "assets/img/projects/lorstats-3.webp"],
    links: []
  },
  {
    id: "stop", section: "web", title: "Stop Game", tag: "2020",
    intro: "Stop Game is a solo project built by me, it's created on NodeJS with Sockets.io, you can play with up to 15 users online.",
    text: [
      "I created this to play with friends and family who loves this classic game. It is no longer online."
    ],
    genre: "Words, Multiplayer Online", role: "Programmer, Game Design",
    thumb: "assets/img/projects/stop-thumb.webp",
    shots: ["assets/img/projects/stop-1.webp", "assets/img/projects/stop-2.webp"],
    links: []
  },

  /* ───────── NOW BUILDING ───────── */
  {
    id: "tableworld", section: "building", title: "Table World", tag: "In development",
    intro: "Table World is a board game simulator, currently in development.",
    text: ["Play board games online with friends on a 3D table."],
    genre: "Simulation, Board Games", role: "Programmer, Game Design",
    thumb: "assets/img/projects/tableworld-thumb.webp",
    shots: ["assets/img/projects/tableworld-1.webp"],
    links: []
  },
  {
    id: "tornaris", section: "building", title: "Tornaris", tag: "Playtesting",
    intro: "Tornaris is a board game for 3 to 6 players, currently in playtesting.",
    text: ["Explore, fight monsters and become the champion of Tornaris."],
    genre: "Board Game, Adventure", role: "Game Design, Art Direction",
    thumb: "assets/img/projects/tornaris-thumb.webp",
    shots: ["assets/img/projects/tornaris-1.webp", "assets/img/projects/tornaris-2.webp", "assets/img/projects/tornaris-3.webp"],
    links: []
  },
  {
    id: "deskwars", section: "building", title: "Desk Wars", tag: "In development",
    intro: "Desk Wars is a strategy game, currently in development.",
    text: ["Turn based. More details when there is something to show."],
    genre: "Strategy", role: "Programmer, Game Design",
    thumb: "assets/img/projects/deskwars-thumb.webp",
    shots: ["assets/img/projects/deskwars-1.webp"],
    links: []
  },
  {
    id: "tcg", section: "building", title: "Card Game", tag: "In development",
    intro: "A collectible card game for two players, currently in development.",
    text: ["More details when there is something to play."],
    genre: "Card Game, Strategy", role: "Programmer, Game Design",
    shots: [],
    links: []
  }
];
