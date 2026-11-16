import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { ROOT } from './lib.mjs'

const name = process.argv[2]

if (!name || !/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(name)) {
  console.error('Usage: pnpm new <presentation> [title]\n')
  console.error('The name becomes the folder name and the URL path.')
  console.error('Use letters, digits, dots, dashes or underscores.')
  process.exit(1)
}

const directory = join(ROOT, name)

if (existsSync(directory)) {
  console.error(`Directory already exists: ${directory}`)
  process.exit(1)
}

const title =
  process.argv
    .slice(3)
    .join(' ')
    .trim() ||
  name
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

const template = `---
theme: default
title: ${title}
titleTemplate: '%s'
author: Tom François
description: ${title}
class: text-center
transition: slide-left
mdc: true
---

# ${title}

<div class="pt-10">
  <span class="px-3 py-1 rounded-full bg-gray-500/15 text-sm">Tom François</span>
</div>

---
layout: default
---

# Bienvenue

Éditez le contenu dans \`${name}/slides.md\`.

---
layout: center
class: text-center
---

# Merci !
`

await mkdir(join(directory, 'public'), { recursive: true })
await writeFile(join(directory, 'slides.md'), template, 'utf8')
await writeFile(join(directory, 'public', '.gitkeep'), '', 'utf8')

console.log(`✓ Created ${name}/slides.md`)
console.log(`\nStart it with:\n  pnpm dev ${name}\n`)
