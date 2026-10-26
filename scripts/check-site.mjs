import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const apps = JSON.parse(await readFile('src/data/apps.json', 'utf8'));
const evidence = JSON.parse(await readFile('docs/app-store-evidence.json', 'utf8'));
assert.equal(apps.length, 18);
assert.equal(new Set(apps.map(app => app.slug)).size, 18);
for (const app of apps) {
  assert(!['heardwell', 'call-gpt'].includes(app.slug));
  const source = evidence.apps[app.slug];
  assert.equal(source.sellerName, 'Brightwood Apps LLC');
  assert(app.appStoreUrl.endsWith(`/id${source.trackId}`), `${app.slug}: wrong store destination`);
  assert.equal(app.minimumOs, source.minimumOsVersion);
  assert.equal(app.workflow.length, 3);
  for (const asset of [app.icon, ...app.screenshots]) {
    await access(`dist${asset}`);
    const bytes = await readFile(`dist${asset}`);
    assert(bytes.length > 1000 && bytes[0] === 255 && bytes[1] === 216, `${asset}: invalid JPEG`);
  }
  await access(`dist${app.privacyUrl}`);
  if (app.termsUrl.startsWith('/')) await access(`dist${app.termsUrl}index.html`);
  const page = await readFile(`dist/apps/${app.slug}/index.html`, 'utf8');
  assert(page.includes(app.name.replaceAll('&', '&amp;')), `${app.slug}: missing page title`);
  await access(`dist/apps/${app.slug}/${app.slug}.html`);
}
for (const route of ['support/index.html', '404.html', 'release.json', 'legal/heardwell/heardwell-privacy.html', 'legal/call-gpt/call-gpt-privacy.html']) await access(`dist/${route}`);
console.log('PASS: 18 app routes, official publisher/store IDs, device requirements, 54 images, legal links and retained legal records.');
