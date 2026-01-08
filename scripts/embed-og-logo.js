import fs from 'fs/promises';
import path from 'path';

const publicDir = path.resolve('.', 'public');
const ogPath = path.join(publicDir, 'og-image.svg');
const pngPath = path.join(publicDir, 'assets', 'justgirls-logo.png');

async function embed() {
  try {
    const png = await fs.readFile(pngPath);
    const b64 = png.toString('base64');
    const dataUrl = `data:image/png;base64,${b64}`;

    let svg = await fs.readFile(ogPath, 'utf8');

    // Replace href and xlink:href references to the PNG with the data URL
    svg = svg.replace(/(href=\")([^\"]*justgirls-logo\.(png|svg|webp|jpg|jpeg))\"/gi, `$1${dataUrl}"`);
    svg = svg.replace(/(xlink:href=\")([^\"]*justgirls-logo\.(png|svg|webp|jpg|jpeg))\"/gi, `$1${dataUrl}"`);

    // If image tag used href without quotes (rare), handle loosely
    svg = svg.replace(/(href=)([^\s>]+justgirls-logo\.(png|svg|webp|jpg|jpeg))/gi, `href="${dataUrl}"`);
    svg = svg.replace(/(xlink:href=)([^\s>]+justgirls-logo\.(png|svg|webp|jpg|jpeg))/gi, `xlink:href="${dataUrl}"`);

    // Write the file back
    await fs.writeFile(ogPath, svg, 'utf8');
    console.log('Embedded logo into', ogPath);
  } catch (err) {
    console.error('Failed to embed logo:', err);
    process.exitCode = 1;
  }
}

embed();
