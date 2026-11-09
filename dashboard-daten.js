/*
  WÖCHENTLICHE AKTUALISIERUNG
  ---------------------------
  Nur die Werte in diesem Objekt ändern. Text immer in Anführungszeichen lassen.
  Nach der Änderung die Datei speichern und auf dem Webspace ersetzen.
*/
window.DASHBOARD_DATA = {
  updatedAt: "09.11.2026, 12:00 Uhr",
  season: "2026/27",
  league: "Oberliga weibliche Jugend B",
  team: "SSG Wuppertal/HSV Wuppertal",
  sourceUrl: "https://www.handball.net/team/95735?season_id=2627",
  teamLogo: "assets/ssg-hsv-wuppertal.png",

  summary: {
    position: 5,
    trend: 0,
    trendLabel: "noch offen – kein Vorwochenvergleich",
    played: 6,
    wins: 4,
    draws: 0,
    losses: 2,
    points: "8:4",
    goalsFor: 135,
    goalsAgainst: 128
  },

  focus: "Vier Siege aus sechs Spielen. Aus den beiden Niederlagen lernen, die positive Torbilanz mitnehmen und als Team konsequent weiterarbeiten.",

  upcoming: [
    { date: "14.11.2026", time: "16:00", opponent: "Wermelskirchener TV", venue: "Auswärts", badge: "Nächste Aufgabe", logo: "assets/wermelskirchener-tv.jpg" },
    { date: "21.11.2026", time: "16:00", opponent: "HC TV Rhede", venue: "Heim", badge: "Aktueller Tabellenzweiter", featured: "silver", logo: "assets/hc-tv-rhede.png" },
    { date: "28.11.2026", time: "13:00", opponent: "HC Gelpe/Strombach", venue: "Auswärts", badge: "Tabellenführer · Platz 1", featured: "gold", logo: "assets/hc-gelpe-strombach.png" },
    { date: "29.11.2026", time: "12:45", opponent: "Tschft. St. Tönis III", venue: "Heim", badge: "Doppelspiel-Wochenende", logo: "assets/st-toenis-iii.png" },
    { date: "06.12.2026", time: "14:15", opponent: "HSG Siebengebirge-Thomasberg", venue: "Auswärts", badge: "Letztes Spiel vor der Rückrunde", logo: "assets/hsg-siebengebirge.jpg" }
  ],

  secondRoundStart: "12.12.2026",

  results: [
    // Ergebnis und Halbzeitstand werden immer aus Wuppertaler Sicht eingetragen.
    { date: "13.09.2026", opponent: "TSV Bayer Leverkusen", venue: "Heim", scoreFor: 21, scoreAgainst: 16, halftime: "15:6" },
    { date: "19.09.2026", opponent: "TV Korschenbroich wB1", venue: "Auswärts", scoreFor: 19, scoreAgainst: 24, halftime: "10:15" },
    { date: "26.09.2026", opponent: "Bonner JSG II", venue: "Heim", scoreFor: 29, scoreAgainst: 24, halftime: "14:13" },
    { date: "03.10.2026", opponent: "HSG Refrath/Hand", venue: "Auswärts", scoreFor: 21, scoreAgainst: 34, halftime: "15:17" },
    { date: "10.10.2026", opponent: "TV Issum", venue: "Heim", scoreFor: 25, scoreAgainst: 17, halftime: "16:10" },
    { date: "07.11.2026", opponent: "Wald-Merscheider TV", venue: "Auswärts", scoreFor: 20, scoreAgainst: 13, halftime: "10:6" }
  ],

  standings: [
    { pos: 1, team: "HC Gelpe/Strombach", played: 6, points: "12:0", goals: "195:119", diff: 76, wins: 6, draws: 0, losses: 0, form: ["S","S","S","S","S"] },
    { pos: 2, team: "HC TV Rhede", played: 6, points: "10:2", goals: "166:134", diff: 32, wins: 5, draws: 0, losses: 1, form: ["S","N","S","S","S"] },
    { pos: 3, team: "TV Korschenbroich wB1", played: 6, points: "10:2", goals: "133:110", diff: 23, wins: 5, draws: 0, losses: 1, form: ["S","S","N","S","S"] },
    { pos: 4, team: "TV Issum", played: 6, points: "8:4", goals: "141:125", diff: 16, wins: 4, draws: 0, losses: 2, form: ["S","S","S","N","N"] },
    { pos: 5, team: "SSG Wuppertal/HSV Wuppertal", played: 6, points: "8:4", goals: "135:128", diff: 7, wins: 4, draws: 0, losses: 2, form: ["N","S","N","S","S"] },
    { pos: 6, team: "HSG Refrath/Hand", played: 6, points: "6:6", goals: "161:149", diff: 12, wins: 3, draws: 0, losses: 3, form: ["N","S","S","N","N"] },
    { pos: 7, team: "Tschft. St. Tönis III", played: 6, points: "6:6", goals: "120:122", diff: -2, wins: 3, draws: 0, losses: 3, form: ["S","S","N","N","S"] },
    { pos: 8, team: "TSV Bayer Leverkusen", played: 6, points: "6:6", goals: "134:136", diff: -2, wins: 3, draws: 0, losses: 3, form: ["N","N","S","S","S"] },
    { pos: 9, team: "Bonner JSG II", played: 6, points: "2:10", goals: "136:165", diff: -29, wins: 1, draws: 0, losses: 5, form: ["S","N","N","N","N"] },
    { pos: 10, team: "Wermelskirchener TV", played: 6, points: "2:10", goals: "99:137", diff: -38, wins: 1, draws: 0, losses: 5, form: ["N","N","N","S","N"] },
    { pos: 11, team: "HSG Siebengebirge-Thomasberg", played: 6, points: "2:10", goals: "102:149", diff: -47, wins: 1, draws: 0, losses: 5, form: ["N","N","S","N","N"] },
    { pos: 12, team: "Wald-Merscheider TV", played: 6, points: "0:12", goals: "105:153", diff: -48, wins: 0, draws: 0, losses: 6, form: ["N","N","N","N","N"] }
  ]
};
