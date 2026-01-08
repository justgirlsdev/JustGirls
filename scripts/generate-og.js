import fs from 'fs/promises';
import sharp from 'sharp';

async function generate() {
  try {
    const svg = await fs.readFile(new URL('../public/og-image.svg', import.meta.url));

    const pngPath = new URL('../public/og-image.png', import.meta.url);
    const webpPath = new URL('../public/og-image.webp', import.meta.url);

    await sharp(svg)
      .resize(1200, 630, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(pngPath);

    await sharp(svg)
      .resize(1200, 630, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(webpPath);

    console.log('OG images generated:', pngPath.pathname, webpPath.pathname);
  } catch (err) {
    console.error('Failed to generate OG images, make sure `sharp` is installed:', err);
    process.exitCode = 1;
  }
}

generate();
