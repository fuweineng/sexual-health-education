import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/images/real');
const MAX = 1600;

const files = (await readdir(dir)).filter((name) => /\.(jpe?g|png)$/i.test(name));

let before = 0;
let after = 0;

for (const name of files) {
  const full = path.join(dir, name);
  const input = await readFile(full);
  before += input.length;

  try {
    const pipeline = sharp(input, { failOn: 'none' })
      .rotate()
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true });

    const output = /\.png$/i.test(name)
      ? await pipeline.png({ compressionLevel: 9, effort: 8 }).toBuffer()
      : await pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true }).toBuffer();

    if (output.length < input.length) {
      await writeFile(full, output);
    }

    const kept = Math.min(output.length, input.length);
    after += kept;
    const saved = Math.round((1 - output.length / input.length) * 100);
    console.log(`${name}: ${(input.length / 1024).toFixed(0)}KB -> ${(output.length / 1024).toFixed(0)}KB (-${saved}%)`);
  } catch (error) {
    after += input.length;
    console.log(`${name}: skipped (${error.message})`);
  }
}

console.log(`\ntotal: ${(before / 1048576).toFixed(2)}MB -> ${(after / 1048576).toFixed(2)}MB`);
