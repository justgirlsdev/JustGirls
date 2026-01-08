import fs from 'fs/promises';
import { fileURLToPath } from 'url';

async function generate() {
  let sharp;
  try {
    // Try to dynamically import sharp so the script gracefully skips
    // image generation if sharp isn't installed (avoids failing the build).
    sharp = (await import('sharp')).default;
  } catch (err) {
    console.warn('Skipping OG generation: `sharp` is not installed. Run `npm install` to enable image generation.');
    return;
  }

  try {
    const svg = await fs.readFile(new URL('../public/og-image.svg', import.meta.url));

    const pngPathUrl = new URL('../public/og-image.png', import.meta.url);
    const webpPathUrl = new URL('../public/og-image.webp', import.meta.url);

    const pngPath = fileURLToPath(pngPathUrl);
    const webpPath = fileURLToPath(webpPathUrl);

    await sharp(svg)
      .resize(1200, 630, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(pngPath);

    await sharp(svg)
      .resize(1200, 630, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(webpPath);

    console.log('OG images generated:', pngPath, webpPath);
  } catch (err) {
    console.error('Failed to generate OG images:', err);
    // Don't set a non-zero exit code so the build doesn't fail on optional image generation
  }
}

generate();
