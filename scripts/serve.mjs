import { createServer } from 'node:http'
import { existsSync } from 'node:fs'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize, sep } from 'node:path'
import { BASE, DIST } from './lib.mjs'

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('No build found. Run `pnpm build` first.')
  process.exit(1)
}

const port = Number(process.env.PORT || 4173)

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.txt': 'text/plain; charset=utf-8',
}

async function resolveFile(relativePath) {
  const filePath = normalize(join(DIST, relativePath))

  if (filePath !== DIST && !filePath.startsWith(DIST + sep)) return null

  try {
    const info = await stat(filePath)
    if (info.isDirectory()) return resolveFile(join(relativePath, 'index.html'))
    if (info.isFile()) return filePath
  } catch {
    return null
  }

  return null
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', 'http://localhost')
    const pathname = decodeURIComponent(url.pathname)

    if (pathname === '/') {
      response.writeHead(302, { Location: BASE })
      response.end()
      return
    }

    if (!pathname.startsWith(BASE)) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end('Not found')
      return
    }

    const relativePath = pathname.slice(BASE.length) || 'index.html'
    const filePath = await resolveFile(relativePath)

    if (!filePath) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end('Not found')
      return
    }

    const content = await readFile(filePath)
    response.writeHead(200, {
      'Content-Type': MIME_TYPES[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
    })
    response.end(content)
  } catch (error) {
    console.error(error)
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Internal server error')
  }
})

server.listen(port, () => {
  console.log(`Preview: http://localhost:${port}${BASE}\n`)
})
