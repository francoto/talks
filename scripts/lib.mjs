import { existsSync } from 'node:fs'
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join, resolve } from 'node:path'
import { parse as parseYaml } from 'yaml'

export const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
export const DIST = join(ROOT, 'dist')

const IGNORED_DIRS = new Set([
  'node_modules',
  'dist',
  'scripts',
  '.git',
  '.github',
  '.slidev',
])

/** Normalize a URL path so it always starts and ends with a slash. */
function normalizeBase(value) {
  let base = value.trim()
  if (!base.startsWith('/')) base = `/${base}`
  if (!base.endsWith('/')) base = `${base}/`
  return base
}

/**
 * Base path used by the built site.
 *
 * - BASE_PATH env var wins.
 * - On GitHub Actions, derive it from the repository name (project pages).
 * - Locally, default to /talks/.
 */
function resolveBase() {
  if (process.env.BASE_PATH) return normalizeBase(process.env.BASE_PATH)

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (repo) return normalizeBase(repo.endsWith('.github.io') ? '/' : `/${repo}/`)

  return '/talks/'
}

export const BASE = resolveBase()

export function slidevBin() {
  const bin = process.platform === 'win32' ? 'slidev.cmd' : 'slidev'
  return join(ROOT, 'node_modules', '.bin', bin)
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  try {
    return parseYaml(match[1]) ?? {}
  } catch {
    return {}
  }
}

function humanize(name) {
  return name
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function formatDate(value) {
  if (!value) return ''
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

/** Find every top-level directory that contains a slides.md file. */
export async function discoverTalks() {
  const entries = await readdir(ROOT, { withFileTypes: true })
  const talks = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith('.') || IGNORED_DIRS.has(entry.name)) continue

    const directory = join(ROOT, entry.name)
    const slides = join(directory, 'slides.md')
    if (!existsSync(slides)) continue

    const frontmatter = parseFrontmatter(await readFile(slides, 'utf8'))
    const order = Number(frontmatter.order)

    talks.push({
      name: entry.name,
      directory,
      slides,
      title: frontmatter.title ? String(frontmatter.title) : humanize(entry.name),
      description: frontmatter.description ? String(frontmatter.description) : '',
      author: frontmatter.author ? String(frontmatter.author) : '',
      date: formatDate(frontmatter.date),
      order: Number.isFinite(order) ? order : 0,
    })
  }

  talks.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order
    if (a.date && b.date) return b.date.localeCompare(a.date)
    if (a.date) return -1
    if (b.date) return 1
    return a.name.localeCompare(b.name)
  })

  return talks
}
