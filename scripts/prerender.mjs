// Gera um HTML pronto (com conteúdo, título, descrição e JSON-LD) para cada
// página listada em public/sitemap.xml. Roda depois do build do cliente e do SSR.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)

const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf-8')
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname)

function inject({ html: appHtml, helmet }) {
  let out = template
  if (helmet) {
    const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
      .map((h) => h.toString())
      .join('')
    if (helmet.title.toString()) out = out.replace(/<title>[\s\S]*?<\/title>\s*/, '')
    if (/name="description"/.test(head)) {
      out = out.replace(/<meta name="description"[^>]*>\s*/, '')
    }
    out = out.replace('</head>', `${head}\n  </head>`)
  }
  return out.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

let count = 0
for (const route of routes) {
  const result = render(route)
  const html = inject(result)
  const file = route === '/' ? 'index.html' : path.join(route.replace(/^\//, ''), 'index.html')
  const target = path.join(dist, file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, html)
  count++
}
fs.rmSync(serverDir, { recursive: true, force: true })
console.log(`Pré-renderizadas ${count} páginas.`)
