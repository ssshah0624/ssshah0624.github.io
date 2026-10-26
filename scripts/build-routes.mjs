import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';
const apps = JSON.parse(await readFile('src/data/apps.json', 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const app of apps) {
  const dir = `dist/apps/${app.slug}`;
  await mkdir(dir, { recursive: true });
  const html = template.replace(/<title>.*?<\/title>/, `<title>${escape(app.name)} — Brightwood Apps</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/>)/, `$1${escape(app.subhead)}$2`);
  await writeFile(`${dir}/index.html`, html);
  await writeFile(`${dir}/${app.slug}.html`, html);
}
await mkdir('dist/support', { recursive: true });
await copyFile('dist/index.html', 'dist/support/index.html');
await copyFile('dist/index.html', 'dist/404.html');
const commit = process.env.GITHUB_SHA || execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
await writeFile('dist/release.json', JSON.stringify({ commit, apps: apps.map(app => app.slug) }) + '\n');
console.log(`Generated ${apps.length} app routes, legacy aliases, support and 404 fallback.`);
