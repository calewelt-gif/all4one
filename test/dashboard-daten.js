/*
  WOCHENTLICHE AKTUALISIERUNG
  Stand nach abgeschlossenem 8. Spieltag - 21.11.2026
*/
window.DASHBOARD_DATA = {
  updatedAt: "23.11.2026, 06:44 Uhr",
  season: "2026/27",
  league: "Oberliga weibliche Jugend B",
  team: "SSG Wuppertal/HSV Wuppertal",
  sourceUrl: "https://www.handball.net/ligen/6140?phaseId=12424&season_id=2627",
  teamLogo: "assets/ssg-hsv-wuppertal.png",

  summary: {
    position: 3,
    trend: 1,
    trendLabel: "▲ 1 Platz zum vorherigen Stand",
    played: 8,
    wins: 6,
    draws: 0,
    losses: 2,
    points: "12:4",
    goalsFor: 189,
    goalsAgainst: 161
  },

  focus: "Sechs Siege aus acht Spielen und auf Platz 3 vorgerückt. Nach dem klaren 29:12 gegen HC TV Rhede wartet mit Tabellenführer HC Gelpe/Strombach die nächste Topaufgabe. Kämpfen ist angeasgt!!!",

  upcoming: [
    { date: "28.11.2026", time: "13:00", opponent: "HC Gelpe/Strombach", venue: "Auswärts", badge: "Tabellenführer · Platz 1", featured: "gold", logo: "assets/hc-gelpe-strombach.png" },
    { date: "29.11.2026", time: "12:45", opponent: "Tschft. St. Tönis III", venue: "Heim", badge: "Doppelspiel-Wochenende", logo: "assets/st-toenis-iii.png" },
    { date: "06.12.2026", time: "14:15", opponent: "HSG Siebengebirge-Thomasberg", venue: "Auswärts", badge: "Letztes Spiel vor der Rückrunde", logo: "assets/hsg-siebengebirge.jpg" },
    { date: "12.12.2026", time: "15:00", opponent: "TSV Bayer Leverkusen", venue: "Auswärts", badge: "Rückrundenstart", logo: "assets/tsv-bayer-leverkusen.png" },
    { date: "19.12.2026", time: "14:00", opponent: "TV Korschenbroich wB1", venue: "Heim", badge: "Heimspiel", logo: "assets/tv-korschenbroich.png" }
  ],

  nextMatchday: {
    number: 9,
    label: "9. Spieltag · 28./29.11.2026",
    games: [
      { date: "28.11.2026", time: "12:30", home: "HSG Siebengebirge-Thomasberg", homeLogo: "assets/hsg-siebengebirge.jpg", away: "TV Issum", awayLogo: "assets/tv-issum.png", score: "" },
      { date: "28.11.2026", time: "13:00", home: "HC Gelpe/Strombach", homeLogo: "assets/hc-gelpe-strombach.png", away: "SSG Wuppertal/HSV Wuppertal", awayLogo: "assets/ssg-hsv-wuppertal.png", score: "", ourGame: true },
      { date: "28.11.2026", time: "14:00", home: "Wermelskirchener TV", homeLogo: "assets/wermelskirchener-tv.jpg", away: "HC TV Rhede", awayLogo: "assets/hc-tv-rhede.png", score: "" },
      { date: "28.11.2026", time: "16:00", home: "TV Korschenbroich wB1", homeLogo: "assets/tv-korschenbroich.png", away: "Bonner JSG II", awayLogo: "assets/bonner-jsg.png", score: "" },
      { date: "28.11.2026", time: "16:45", home: "Tschft. St. Tönis III", homeLogo: "assets/st-toenis-iii.png", away: "Wald-Merscheider TV", awayLogo: "assets/wald-merscheider-tv.png", score: "" },
      { date: "28.11.2026", time: "17:30", home: "TSV Bayer Leverkusen", homeLogo: "assets/tsv-bayer-leverkusen.png", away: "HSG Refrath/Hand", awayLogo: "assets/hsg-refrath-hand.png", score: "" },
      { date: "29.11.2026", time: "12:30", home: "TV Issum", homeLogo: "assets/tv-issum.png", away: "TSV Bayer Leverkusen", awayLogo: "assets/tsv-bayer-leverkusen.png", score: "" },
      { date: "29.11.2026", time: "12:45", home: "SSG Wuppertal/HSV Wuppertal", homeLogo: "assets/ssg-hsv-wuppertal.png", away: "Tschft. St. Tönis III", awayLogo: "assets/st-toenis-iii.png", score: "", ourGame: true },
      { date: "29.11.2026", time: "14:15", home: "Wald-Merscheider TV", homeLogo: "assets/wald-merscheider-tv.png", away: "HSG Siebengebirge-Thomasberg", awayLogo: "assets/hsg-siebengebirge.jpg", score: "" },
      { date: "29.11.2026", time: "14:45", home: "HC TV Rhede", homeLogo: "assets/hc-tv-rhede.png", away: "HC Gelpe/Strombach", awayLogo: "assets/hc-gelpe-strombach.png", score: "" },
      { date: "29.11.2026", time: "15:45", home: "HSG Refrath/Hand", homeLogo: "assets/hsg-refrath-hand.png", away: "TV Korschenbroich wB1", awayLogo: "assets/tv-korschenbroich.png", score: "" },
      { date: "29.11.2026", time: "16:00", home: "Wermelskirchener TV", homeLogo: "assets/wermelskirchener-tv.jpg", away: "Bonner JSG II", awayLogo: "assets/bonner-jsg.png", score: "" }
    ]
  },
  secondRoundStart: "12.12.2026",

  results: [
    { date: "13.09.2026", opponent: "TSV Bayer Leverkusen", venue: "Heim", scoreFor: 21, scoreAgainst: 16, halftime: "15:6" },
    { date: "19.09.2026", opponent: "TV Korschenbroich wB1", venue: "Auswärts", scoreFor: 19, scoreAgainst: 24, halftime: "10:15" },
    { date: "26.09.2026", opponent: "Bonner JSG II", venue: "Heim", scoreFor: 29, scoreAgainst: 24, halftime: "14:13" },
    { date: "03.10.2026", opponent: "HSG Refrath/Hand", venue: "Auswärts", scoreFor: 21, scoreAgainst: 34, halftime: "15:17" },
    { date: "10.10.2026", opponent: "TV Issum", venue: "Heim", scoreFor: 25, scoreAgainst: 17, halftime: "16:10" },
    { date: "07.11.2026", opponent: "Wald-Merscheider TV", venue: "Auswärts", scoreFor: 20, scoreAgainst: 13, halftime: "10:6" },
    { date: "14.11.2026", opponent: "Wermelskirchener TV", venue: "Auswärts", scoreFor: 25, scoreAgainst: 21, halftime: "" },
    { date: "21.11.2026", opponent: "HC TV Rhede", venue: "Heim", scoreFor: 29, scoreAgainst: 12, halftime: "" }
  ],

  standings: [
    { pos: 1, team: "HC Gelpe/Strombach", played: 8, points: "16:0", goals: "259:160", diff: 99, wins: 8, draws: 0, losses: 0, form: ["S","S","S","S","S"] },
    { pos: 2, team: "TV Korschenbroich wB1", played: 8, points: "14:2", goals: "194:143", diff: 51, wins: 7, draws: 0, losses: 1, form: ["N","S","S","S","S"] },
    { pos: 3, team: "SSG Wuppertal/HSV Wuppertal", played: 8, points: "12:4", goals: "189:161", diff: 28, wins: 6, draws: 0, losses: 2, form: ["N","S","S","S","S"] },
    { pos: 4, team: "HC TV Rhede", played: 8, points: "12:4", goals: "211:180", diff: 31, wins: 6, draws: 0, losses: 2, form: ["S","S","S","S","N"] },
    { pos: 5, team: "TV Issum", played: 8, points: "10:6", goals: "193:175", diff: 18, wins: 5, draws: 0, losses: 3, form: ["S","N","N","N","S"] },
    { pos: 6, team: "HSG Refrath/Hand", played: 8, points: "8:8", goals: "204:190", diff: 14, wins: 4, draws: 0, losses: 4, form: ["S","N","N","S","N"] },
    { pos: 7, team: "TSV Bayer Leverkusen", played: 8, points: "8:8", goals: "188:193", diff: -5, wins: 4, draws: 0, losses: 4, form: ["S","S","S","N","S"] },
    { pos: 8, team: "Tschft. St. Tönis III", played: 8, points: "6:10", goals: "154:170", diff: -16, wins: 3, draws: 0, losses: 5, form: ["N","N","S","N","N"] },
    { pos: 9, team: "HSG Siebengebirge-Thomasberg", played: 8, points: "5:11", goals: "144:189", diff: -45, wins: 2, draws: 1, losses: 5, form: ["S","N","N","U","S"] },
    { pos: 10, team: "Bonner JSG II", played: 8, points: "3:13", goals: "184:218", diff: -34, wins: 1, draws: 1, losses: 6, form: ["N","N","N","U","N"] },
    { pos: 11, team: "Wermelskirchener TV", played: 8, points: "2:14", goals: "134:196", diff: -62, wins: 1, draws: 0, losses: 7, form: ["N","S","N","N","N"] },
    { pos: 12, team: "Wald-Merscheider TV", played: 8, points: "0:16", goals: "138:217", diff: -79, wins: 0, draws: 0, losses: 8, form: ["N","N","N","N","N"] }
  ]
};
