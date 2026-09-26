import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/images/real');
const MAX = 1600;

const references = [
  { file: 'src/data/topics.ts', pattern: /(\/images\/real\/[^'"\s]+)\.(jpe?g|png)/g, replace: '$1.avif' },
  { file: 'src/data/articles.ts', pattern: /(\/images\/real\/[^'"\s]+)\.(jpe?g|png)/g, replace: '$1.avif' },
  { file: 'src/pages/index.astro', pattern: /(\/images\/real\/[^'"\s]+)\.(jpe?g|png)/g, replace: '$1.avif' },
  { file: 'src/pages/article/index.astro', pattern: /(\/images\/real\/[^'"\s]+)\.(jpe?g|png)/g, replace: '$1.avif' },
  { file: 'src/data/credits.ts', pattern: /(file:\s*'[^']+)\.(jpe?g|png)'/g, replace: "$1.avif'" },
];

const files = (await readdir(dir)).filter((name) => /\.(jpe?g|png)$/i.test(name));

let before = 0;
let after = 0;

for (const name of files) {
  const full = path.join(dir, name);
  const input = await readFile(full);
  before += input.length;

  const fromPng = /\.png$/i.test(name);
  try {
    const output = await sharp(input, { failOn: 'none' })
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .avif({
        quality: fromPng ? 72 : 58,
        effort: 4,
        chromaSubsampling: fromPng ? '4:4:4' : '4:2:0',
      })
      .toBuffer();

    const target = path.join(dir, name.replace(/\.(jpe?g|png)$/i, '.avif'));
    await writeFile(target, output);
    await unlink(full);
    after += output.length;
    console.log(`${name} (${(input.length / 1024).toFixed(0)}KB) -> ${path.basename(target)} (${(output.length / 1024).toFixed(0)}KB)`);
  } catch (error) {
    after += input.length;
    console.log(`${name}: skipped (${error.message})`);
  }
}

for (const ref of references) {
  const source = await readFile(ref.file, 'utf8');
  const updated = source.replace(ref.pattern, ref.replace);
  if (updated !== source) {
    await writeFile(ref.file, updated, 'utf8');
    console.log(`updated refs: ${ref.file}`);
  }
}

console.log(`\nimages: ${(before / 1048576).toFixed(2)}MB -> ${(after / 1048576).toFixed(2)}MB`);
