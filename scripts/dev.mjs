import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { ROOT, discoverTalks, slidevBin } from './lib.mjs'

const name = process.argv[2]

if (!name) {
  const talks = await discoverTalks()

  console.error('Usage: pnpm dev <presentation>\n')
  console.error('Available presentations:')
  for (const talk of talks) console.error(`  ${talk.name.padEnd(28)} ${talk.title}`)
  process.exit(1)
}

const slides = join(ROOT, name, 'slides.md')

if (!existsSync(slides)) {
  console.error(`No slides.md found in ${join(ROOT, name)}`)
  process.exit(1)
}

console.log(`Starting Slidev for ${name}...\n`)

const child = spawn(slidevBin(), [slides], { cwd: ROOT, stdio: 'inherit' })

child.on('error', (error) => {
  console.error(error)
  process.exit(1)
})

child.on('exit', (code) => process.exit(code ?? 0))
