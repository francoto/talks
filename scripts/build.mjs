import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { BASE, DIST, ROOT, discoverTalks, slidevBin } from './lib.mjs'
import { renderIndex } from './index-template.mjs'

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: ROOT, stdio: 'inherit' })

    child.on('error', reject)
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Command failed with exit code ${code}: ${command} ${args.join(' ')}`))
    })
  })
}

const talks = await discoverTalks()

if (talks.length === 0) {
  console.error('No presentation found. Every presentation needs a <name>/slides.md file.')
  process.exit(1)
}

console.log(`\nBuilding ${talks.length} presentation(s) with base ${BASE}\n`)

await rm(DIST, { recursive: true, force: true })
await mkdir(DIST, { recursive: true })

const startedAt = Date.now()

for (const talk of talks) {
  console.log(`\n▶ ${talk.name} — ${talk.title}`)

  const output = join(DIST, talk.name)

  for (const assetDirectory of ['public', 'binaries']) {
    const source = join(talk.directory, assetDirectory)
    if (!existsSync(source)) continue

    const destination = assetDirectory === 'public'
      ? output
      : join(output, assetDirectory)

    await cp(source, destination, { recursive: true })
  }

  await run(slidevBin(), [
    'build',
    talk.slides,
    '--base',
    `${BASE}${talk.name}/`,
    '--router-mode',
    'hash',
    '--out',
    output,
  ])
}

await writeFile(join(DIST, 'index.html'), renderIndex(talks), 'utf8')
await writeFile(join(DIST, '.nojekyll'), '', 'utf8')

const seconds = ((Date.now() - startedAt) / 1000).toFixed(1)

console.log(`\n✓ Built ${talks.length} presentation(s) in ${seconds}s`)
console.log(`  Output: ${DIST}`)
console.log(`  Preview: pnpm preview\n`)
