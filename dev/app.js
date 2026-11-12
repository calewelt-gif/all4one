(() => {
  const d = window.DASHBOARD_DATA;
  if (!d) {
    document.body.innerHTML = '<div class="empty-warning"><strong>Daten konnten nicht geladen werden.</strong><br>Bitte prüfen, ob die Datei <code>dashboard-daten.js</code> im gleichen Ordner wie <code>index.html</code> liegt.</div>';
    return;
  }

  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const gd = d.summary.goalsFor - d.summary.goalsAgainst;
  const signed = n => n > 0 ? `+${n}` : String(n);
  const trendClass = d.summary.trend > 0 ? 'up' : d.summary.trend < 0 ? 'down' : 'flat';
  const trendIcon = d.summary.trend > 0 ? '▲' : d.summary.trend < 0 ? '▼' : '●';

  document.title = `${d.team} · Wochen-Dashboard`;
  $('brand-logo').src = d.teamLogo;
  $('hero-logo').src = d.teamLogo;
  $('team-name').textContent = d.team;
  $('season').textContent = `Saison ${d.season}`;
  $('league').textContent = d.league;
  $('updated').textContent = `Stand ${d.updatedAt}`;
  $('source-link').href = d.sourceUrl;
  $('footer-source').href = d.sourceUrl;

  $('kpis').innerHTML = [
    ['Tabellenplatz', d.summary.position, `<span class="trend ${trendClass}">${trendIcon} ${esc(d.summary.trendLabel)}</span>`],
    ['Bilanz', `${d.summary.wins}–${d.summary.losses}–${d.summary.draws}`, 'Siege · Niederlagen · Unentschieden'],
    ['Punkte', d.summary.points, `${d.summary.played} Spiele`],
    ['Tore', `${d.summary.goalsFor}:${d.summary.goalsAgainst}`, `${signed(gd)} Tordifferenz`],
    ['Nächstes Spiel', d.upcoming[0]?.date || '–', d.upcoming[0] ? `${esc(d.upcoming[0].time)} · ${esc(d.upcoming[0].venue)}` : 'Noch kein Termin']
  ].map(x => `<div class="kpi"><span class="label">${x[0]}</span><strong>${x[1]}</strong><span class="sub">${x[2]}</span></div>`).join('');

  const next = d.upcoming[0];
  if (next) {
    $('next-game').innerHTML = `
      <div class="side"><span class="eyebrow">Nächste Aufgabe</span><h3>${esc(next.date)} · ${esc(next.time)} Uhr</h3><div>${esc(next.venue)}</div></div>
      <div class="vs"><strong>VS</strong>${esc(d.league)}</div>
      <div class="side"><img src="${esc(next.logo)}" alt="Logo ${esc(next.opponent)}"><h3>${esc(next.opponent)}</h3></div>`;
  }

  $('fixtures').innerHTML = d.upcoming.map((g, i) => `
    <article class="fixture ${g.featured ? `featured-${esc(g.featured)}` : ''}" aria-label="Spiel gegen ${esc(g.opponent)}">
      <div><span class="date">${esc(g.date)}</span><br><span class="time">${esc(g.time)} Uhr</span></div>
      <img src="${esc(g.logo)}" alt="Logo ${esc(g.opponent)}">
      <div class="opponent">${esc(g.opponent)}</div>
      <span class="venue">${esc(g.venue)}</span>
      <span class="badge">${esc(g.badge || (i === 0 ? 'Nächste Aufgabe' : 'Termin'))}</span>
    </article>`).join('');
  $('round-date').textContent = d.secondRoundStart;

  const last = d.results[d.results.length - 1];
  const lastWin = last && last.scoreFor > last.scoreAgainst;
  $('last-result').innerHTML = last ? `
    <span class="eyebrow">Letztes Spiel · ${esc(last.date)}</span>
    <h2>SSG/HSV – ${esc(last.opponent)}</h2>
    <div class="scoreline"><span class="team-score">${last.scoreFor}</span><span class="colon">:</span><span class="team-score">${last.scoreAgainst}</span></div>
    <div class="outcome">${lastWin ? 'Sieg' : last.scoreFor === last.scoreAgainst ? 'Unentschieden' : 'Niederlage'} · Halbzeit ${esc(last.halftime)} · ${esc(last.venue)}</div>
    <div class="focus"><strong>Spielerinnen-Fokus</strong><br>${esc(d.focus)}</div>` : '<p>Noch keine Ergebnisse eingetragen.</p>';

  const diffs = d.results.map(r => r.scoreFor - r.scoreAgainst);
  const max = Math.max(1, ...diffs.map(Math.abs));
  $('diff-chart').innerHTML = d.results.map((r, i) => {
    const diff = diffs[i];
    const h = Math.max(5, Math.round(Math.abs(diff) / max * 88));
    const opp = r.opponent.split(/\s+/).slice(0,2).join(' ');
    return `<div class="chart-item" title="${esc(r.date)}: ${esc(r.opponent)} ${signed(diff)}">
      <div class="chart-positive">${diff >= 0 ? `<div class="bar" style="height:${h}%"></div><span class="bar-value" style="--h:${h}%">${signed(diff)}</span>` : ''}</div>
      <div class="chart-negative">${diff < 0 ? `<div class="bar" style="height:${h}%"></div><span class="bar-value" style="--h:${h}%">${signed(diff)}</span>` : ''}</div>
      <div class="chart-label"><strong>${esc(r.date.slice(0,5))}</strong>${esc(opp)}</div>
    </div>`;
  }).join('');

  $('results-list').innerHTML = d.results.slice().reverse().map(r => {
    const win = r.scoreFor > r.scoreAgainst;
    const draw = r.scoreFor === r.scoreAgainst;
    return `<div class="result-row">
      <div class="date">${esc(r.date)}</div>
      <div class="match">${esc(r.opponent)} <span class="where">· ${esc(r.venue)}</span></div>
      <div class="score">${r.scoreFor}:${r.scoreAgainst}</div>
      <div class="half">HZ ${esc(r.halftime)}</div>
      <div class="result-chip ${win ? 'win' : draw ? '' : 'loss'}">${win ? 'S' : draw ? 'U' : 'N'}</div>
    </div>`;
  }).join('');

  $('standings-body').innerHTML = d.standings.map(row => {
    const ours = row.team.toLowerCase() === d.team.toLowerCase();
    return `<tr class="${ours ? 'ours' : ''}">
      <td class="pos">${row.pos}</td><td class="team-col">${esc(row.team)}${ours ? ' · UNSER TEAM' : ''}</td>
      <td>${row.played}</td><td><strong>${esc(row.points)}</strong></td><td>${esc(row.goals)}</td><td>${signed(row.diff)}</td>
      <td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td>
      <td><div class="form">${row.form.map(f => `<i class="${esc(f)}">${esc(f)}</i>`).join('')}</div></td>
    </tr>`;
  }).join('');
  $('table-summary').innerHTML = `<span><strong>${esc(d.team)}</strong> · Platz ${d.summary.position}</span><span>${d.summary.played} Spiele · ${d.summary.points} Punkte · ${d.summary.goalsFor}:${d.summary.goalsAgainst} Tore · ${signed(gd)}</span><span class="legend">S = Sieg · U = Unentschieden · N = Niederlage</span>`;

  $('print-button').addEventListener('click', e => { e.preventDefault(); window.print(); });
})();
