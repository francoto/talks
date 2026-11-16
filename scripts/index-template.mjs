function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char],
  )
}

function renderCard(talk) {
  const description = talk.description
    ? `<p class="description">${escapeHtml(talk.description)}</p>`
    : ''

  const meta = [talk.author, talk.date]
    .filter(Boolean)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join('')

  return `        <a class="card" href="./${encodeURIComponent(talk.name)}/">
          <div>
            <h2>${escapeHtml(talk.title)}</h2>
            ${description}
          </div>
          <div class="card-footer">
            <div class="meta">${meta}</div>
            <span class="arrow" aria-hidden="true">→</span>
          </div>
        </a>`
}

export function renderIndex(talks) {
  const count = talks.length
  const summary = `${count} présentation${count > 1 ? 's' : ''}`

  const repo = process.env.GITHUB_REPOSITORY
  const source = repo
    ? `<a href="https://github.com/${escapeHtml(repo)}">Code source</a>`
    : ''

  const cards = talks.length
    ? talks.map(renderCard).join('\n')
    : `        <p class="empty">Aucune présentation pour le moment. Créez-en une avec <code>pnpm new nom_de_la_presentation</code>.</p>`

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Talks</title>
    <meta name="description" content="Présentations réalisées avec Slidev" />
    <style>
      :root {
        color-scheme: light dark;
        --bg: #f6f6f4;
        --fg: #18181b;
        --muted: #6b6b76;
        --card: #ffffff;
        --border: #e4e4e7;
        --accent: #4f46e5;
        --shadow: 0 12px 30px rgb(24 24 27 / 0.08);
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --bg: #0e1014;
          --fg: #f4f4f5;
          --muted: #a1a1aa;
          --card: #171a21;
          --border: #2a2e37;
          --accent: #818cf8;
          --shadow: 0 12px 30px rgb(0 0 0 / 0.35);
        }
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: var(--bg);
        color: var(--fg);
        font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
        line-height: 1.5;
      }

      main {
        width: min(980px, 100%);
        margin: 0 auto;
        padding: clamp(2.5rem, 7vw, 5rem) 1.25rem 3rem;
      }

      header {
        margin-bottom: 2.5rem;
      }

      h1 {
        margin: 0;
        font-size: clamp(2.2rem, 6vw, 3.4rem);
        letter-spacing: -0.04em;
        line-height: 1.05;
      }

      header p {
        margin: 0.9rem 0 0;
        color: var(--muted);
        font-size: 1.05rem;
      }

      .count {
        display: inline-block;
        margin-top: 1.2rem;
        padding: 0.3rem 0.7rem;
        border: 1px solid var(--border);
        border-radius: 999px;
        color: var(--muted);
        font-size: 0.82rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 270px), 1fr));
        gap: 1rem;
      }

      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        min-height: 180px;
        padding: 1.5rem;
        overflow: hidden;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 16px;
        color: inherit;
        text-decoration: none;
        transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
      }

      .card::before {
        content: '';
        position: absolute;
        inset: 0 0 auto;
        height: 3px;
        background: linear-gradient(90deg, var(--accent), transparent 75%);
        opacity: 0;
        transition: opacity 160ms ease;
      }

      .card:hover,
      .card:focus-visible {
        border-color: var(--accent);
        box-shadow: var(--shadow);
        transform: translateY(-3px);
      }

      .card:hover::before,
      .card:focus-visible::before {
        opacity: 1;
      }

      .card h2 {
        margin: 0;
        font-size: 1.35rem;
        letter-spacing: -0.02em;
      }

      .description {
        margin: 0.55rem 0 0;
        color: var(--muted);
        font-size: 0.95rem;
      }

      .card-footer {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 1rem;
      }

      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem 0.9rem;
        color: var(--muted);
        font-size: 0.82rem;
      }

      .arrow {
        color: var(--accent);
        font-size: 1.25rem;
        transition: transform 160ms ease;
      }

      .card:hover .arrow,
      .card:focus-visible .arrow {
        transform: translateX(4px);
      }

      .empty {
        color: var(--muted);
      }

      code {
        padding: 0.1rem 0.3rem;
        background: color-mix(in srgb, var(--fg) 8%, transparent);
        border-radius: 5px;
        font-size: 0.9em;
      }

      footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.75rem;
        margin-top: 3rem;
        padding-top: 1.25rem;
        border-top: 1px solid var(--border);
        color: var(--muted);
        font-size: 0.85rem;
      }

      footer a {
        color: inherit;
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Talks</h1>
        <p>Présentations réalisées avec <a href="https://sli.dev">Slidev</a>.</p>
        <span class="count">${summary}</span>
      </header>

      <div class="grid">
${cards}
      </div>

      <footer>
        <span>Construit avec Slidev</span>
        ${source}
      </footer>
    </main>
  </body>
</html>
`
}
