import { readFile, writeFile } from 'node:fs/promises';

const templatePath = new URL('./project.html', import.meta.url);
const template = await readFile(templatePath, 'utf8');
const projectBlock = template.match(/const PROJECTS = (\[[\s\S]*?\n\]);/);

if (!projectBlock) {
  throw new Error('Could not find the PROJECTS array in project.html.');
}

const PROJECTS = Function(`"use strict"; return ${projectBlock[1]};`)();
const escapeHtml = value => String(value).replace(/[&<>"]/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
})[character]);

for (const project of PROJECTS) {
  const page = template
    .replace('<title>Project — Art &amp; Science</title>', `<title>${escapeHtml(project.title)} — Art &amp; Science</title>`)
    .replace('<body data-project="">', `<body data-project="${project.slug}">`);

  await writeFile(new URL(`./${project.slug}.html`, import.meta.url), page);
  console.log(`Generated ${project.slug}.html`);
}
