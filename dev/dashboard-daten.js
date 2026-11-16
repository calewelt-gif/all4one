/*
  WÖCHENTLICHE AKTUALISIERUNG
  Stand nach abgeschlossenem 7. Spieltag - 15.11.2026
*/
window.DASHBOARD_DATA = {
  updatedAt: "15.11.2026, 18:00 Uhr",
  season: "2026/27",
  league: "Oberliga weibliche Jugend B",
  team: "SSG Wuppertal/HSV Wuppertal",
  sourceUrl: "https://www.handball.net/ligen/6140?phaseId=12424&season_id=2627",
  teamLogo: "assets/ssg-hsv-wuppertal.png",
  summary: {
    position: 4,
    trend: 1,
    trendLabel: "▲ 1 Platz zum vorherigen Stand",
    played: 7,
    wins: 5,
    draws: 0,
    losses: 2,
    points: "10:4",
    goalsFor: 160,
    goalsAgainst: 149
  },
  focus: "Fünf Siege aus sieben Spielen und auf Platz 4 vorgerückt. Die positive Serie mitnehmen und gegen die direkten Spitzenteams konsequent als Mannschaft auftreten.",
  upcoming: [
    { date: "21.11.2026", time: "16:00", opponent: "HC TV Rhede", venue: "Heim", badge: "Tabellenplatz 3", featured: "silver", logo: "assets/hc-tv-rhede.png" },
    { date: "28.11.2026", time: "13:00", opponent: "HC Gelpe/Strombach", venue: "Auswärts", badge: "Tabellenführer · Platz 1", featured: "gold", logo: "assets/hc-gelpe-strombach.png" },
    { date: "29.11.2026", time: "12:45", opponent: "Tschft. St. Tönis III", venue: "Heim", badge: "Doppelspiel-Wochenende", logo: "assets/st-toenis-iii.png" },
    { date: "06.12.2026", time: "14:15", opponent: "HSG Siebengebirge-Thomasberg", venue: "Auswärts", badge: "Letztes Spiel vor der Rückrunde", logo: "assets/hsg-siebengebirge.jpg" },
    { date: "12.12.2026", time: "", opponent: "TSV Bayer Leverkusen", venue: "Auswärts", badge: "Rückrundenstart", logo: "assets/tsv-bayer-leverkusen.png" }
  ],
  nextMatchday: {
    number: 8, label: "8. Spieltag",
    games: [
      { date: "21.11.2026", time: "14:00", home: "TV Korschenbroich wB1", away: "Wermelskirchener TV" },
      { date: "21.11.2026", time: "15:00", home: "SSG Wuppertal/HSV Wuppertal", away: "HC TV Rhede", ourGame: true },
      { date: "21.11.2026", time: "15:45", home: "HSG Refrath/Hand", away: "HSG Siebengebirge-Thomasberg" },
      { date: "21.11.2026", time: "16:00", home: "Wald-Merscheider TV", away: "HC Gelpe/Strombach" },
      { date: "21.11.2026", time: "16:15", home: "Bonner JSG II", away: "TSV Bayer Leverkusen" },
      { date: "22.11.2026", time: "18:00", home: "TV Issum", away: "Tschft. St. Tönis III" }
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
    { date: "14.11.2026", opponent: "Wermelskirchener TV", venue: "Auswärts", scoreFor: 25, scoreAgainst: 21, halftime: "" }
  ],
  standings: [
    { pos: 1, team: "HC Gelpe/Strombach", played: 7, points: "14:0", goals: "228:144", diff: 84, wins: 7, draws: 0, losses: 0, form: ["S","S","S","S","S"] },
    { pos: 2, team: "TV Korschenbroich wB1", played: 7, points: "12:2", goals: "160:129", diff: 31, wins: 6, draws: 0, losses: 1, form: ["S","N","S","S","S"] },
    { pos: 3, team: "HC TV Rhede", played: 7, points: "12:2", goals: "199:151", diff: 48, wins: 6, draws: 0, losses: 1, form: ["N","S","S","S","S"] },
    { pos: 4, team: "SSG Wuppertal/HSV Wuppertal", played: 7, points: "10:4", goals: "160:149", diff: 11, wins: 5, draws: 0, losses: 2, form: ["S","N","S","S","S"] },
    { pos: 5, team: "TV Issum", played: 7, points: "8:6", goals: "166:158", diff: 8, wins: 4, draws: 0, losses: 3, form: ["S","S","N","N","N"] },
    { pos: 6, team: "HSG Refrath/Hand", played: 7, points: "8:6", goals: "182:166", diff: 16, wins: 4, draws: 0, losses: 3, form: ["S","S","N","N","S"] },
    { pos: 7, team: "TSV Bayer Leverkusen", played: 7, points: "6:8", goals: "153:163", diff: -10, wins: 3, draws: 0, losses: 4, form: ["N","S","S","S","N"] },
    { pos: 8, team: "Tschft. St. Tönis III", played: 7, points: "6:8", goals: "137:143", diff: -6, wins: 3, draws: 0, losses: 4, form: ["S","N","N","S","N"] },
    { pos: 9, team: "Bonner JSG II", played: 7, points: "3:11", goals: "154:183", diff: -29, wins: 1, draws: 1, losses: 5, form: ["N","N","N","N","U"] },
    { pos: 10, team: "HSG Siebengebirge-Thomasberg", played: 7, points: "3:11", goals: "120:167", diff: -47, wins: 1, draws: 1, losses: 5, form: ["N","S","N","N","U"] },
    { pos: 11, team: "Wermelskirchener TV", played: 7, points: "2:12", goals: "120:162", diff: -42, wins: 1, draws: 0, losses: 6, form: ["N","N","S","N","N"] },
    { pos: 12, team: "Wald-Merscheider TV", played: 7, points: "0:14", goals: "122:186", diff: -64, wins: 0, draws: 0, losses: 7, form: ["N","N","N","N","N"] }
  ]
};
