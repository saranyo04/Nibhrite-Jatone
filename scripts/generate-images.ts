import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

async function generateImage(prompt: string, outputPath: string, size: string = '1024x1024') {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    const zai = await ZAI.create();
    const response = await zai.images.generations.create({ prompt, size });
    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`✓ Generated: ${outputPath} (${(buffer.length / 1024).toFixed(0)}KB)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${outputPath} - ${(error as Error).message}`);
    return false;
  }
}

async function main() {
  const base = '/home/z/my-project/public/images';
  
  const images = [
    // Hero
    {
      prompt: "Early morning misty landscape of Santiniketan Bengal India, golden Sonajhuri forest with tall eucalyptus trees, red laterite soil path, soft warm sunrise light, terracotta temple in distance, pastoral Bengali countryside, cinematic wide shot, photorealistic, warm earthy tones, peaceful atmosphere, no people",
      output: `${base}/hero-bg.jpg`,
      size: '1440x720'
    },
    // About section
    {
      prompt: "Beautiful traditional Bengali homestay house surrounded by lush green trees and garden, terracotta courtyard, warm afternoon light, red soil path leading to entrance, Sal trees, peaceful rural Bengal setting, photorealistic, warm earthy color palette, inviting atmosphere, no people",
      output: `${base}/about-home.jpg`,
      size: '1344x768'
    },
    // Experiences
    {
      prompt: "Cup of steaming chai tea on wooden table in misty morning garden, surrounded by tall Sal trees and green foliage, morning dew, warm golden light, Santiniketan Bengal India, photorealistic, peaceful atmosphere, warm earthy tones",
      output: `${base}/experience/morning-tea.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Golden Sonajhuri forest path in Santiniketan, tall eucalyptus trees with golden leaves, red laterite soil path, dappled sunlight filtering through canopy, peaceful walking trail, Bengal India, photorealistic, warm golden light, cinematic atmosphere",
      output: `${base}/experience/sonajhuri-walk.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Baul musician playing ektara single-stringed instrument in rural Bengal field, traditional Bengali folk singer with orange robe, spiritual expression, open grassland with trees, warm sunset light, Santiniketan India, photorealistic, cultural atmosphere, warm earthy tones",
      output: `${base}/experience/baul-culture.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Traditional Bengali thali meal on terracotta plate, rice dal fish curry vegetables, served on banana leaf, wooden table, warm ambient light, home-cooked Indian food photography, appetizing, authentic, photorealistic, warm earthy tones",
      output: `${base}/experience/bengali-food.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Serene rural Bengal evening scene, warm golden sunset over open fields, silhouette of trees, fireflies in the air, mud path, peaceful countryside, Santiniketan India, photorealistic, cinematic atmosphere, warm orange and purple sky",
      output: `${base}/experience/peaceful-evening.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Rural Bengal village scene, terracotta pottery on display, thatched mud hut, green paddy fields, palm trees, traditional Bengali village life, warm afternoon light, photorealistic, cultural heritage, earthy warm tones, no people",
      output: `${base}/experience/rural-bengal.jpg`,
      size: '1024x1024'
    },
    // Gallery - Interior
    {
      prompt: "Cozy traditional Bengali living room interior, terracotta floor, handwoven cotton mats, brass artifacts, warm ambient lighting, wooden furniture, earthy tones, photorealistic, peaceful homestay interior, no people",
      output: `${base}/gallery/interior/interior-1.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Artistic corner of Bengali homestay with terracotta pottery and handcrafted items on wooden shelf, warm lamp light, cotton fabric, earthy decor, photorealistic, cozy atmosphere, no people",
      output: `${base}/gallery/interior/interior-2.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Warm reading nook with Bengali books and handmade kantha quilt, wooden chair near window with garden view, soft natural light, earthy tones, photorealistic, peaceful corner, no people",
      output: `${base}/gallery/interior/interior-3.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Traditional Bengali sitting area with low wooden table and cotton cushions, terracotta floor, brass lamp, warm ambient light, earthy decor, photorealistic, inviting space, no people",
      output: `${base}/gallery/interior/interior-4.jpg`,
      size: '1024x1024'
    },
    // Gallery - Exterior
    {
      prompt: "Beautiful Bengali homestay exterior surrounded by lush greenery and flowering trees, terracotta courtyard, red soil path, warm afternoon light, Santiniketan style house, photorealistic, peaceful atmosphere, no people",
      output: `${base}/gallery/exterior/exterior-1.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Garden path through Sal trees at Bengali homestay, red laterite soil walkway, green canopy, dappled sunlight, lush tropical garden, photorealistic, peaceful nature, no people",
      output: `${base}/gallery/exterior/exterior-2.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Terracotta courtyard of Bengali homestay at dusk, warm golden light, potted plants, traditional architecture, earthy tones, photorealistic, serene atmosphere, no people",
      output: `${base}/gallery/exterior/exterior-3.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Morning view from homestay veranda looking out to green garden, mist in the air, warm sunrise light, wooden railing, peaceful Bengal countryside, photorealistic, no people",
      output: `${base}/gallery/exterior/exterior-4.jpg`,
      size: '1024x1024'
    },
    // Gallery - Rooms
    {
      prompt: "Elegant homestay bedroom with earthy tones and Bengali cotton bedspread, wooden bed frame, warm lamp light, window with garden view, terracotta floor, photorealistic, cozy peaceful room, no people",
      output: `${base}/gallery/rooms/rooms-1.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Cozy bedroom with large window overlooking green garden, white cotton curtains, wooden furniture, soft natural light, kantha quilt on bed, photorealistic, peaceful room, no people",
      output: `${base}/gallery/rooms/rooms-2.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Traditional Bengali style room with handwoven mats and brass artifacts, low wooden bed with cotton sheets, terracotta floor, warm ambient light, photorealistic, cultural atmosphere, no people",
      output: `${base}/gallery/rooms/rooms-3.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Bright peaceful room with natural light streaming through window, white walls with terracotta accents, wooden furniture, green plants, minimal decor, photorealistic, serene space, no people",
      output: `${base}/gallery/rooms/rooms-4.jpg`,
      size: '1024x1024'
    },
    // Gallery - Food
    {
      prompt: "Traditional Bengali thali meal with rice fish curry dal vegetables and chutney, served on brass plate with terracotta bowl, warm ambient light, authentic Indian food photography, photorealistic, appetizing",
      output: `${base}/gallery/food/food-1.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Fresh morning chai in terracotta cup with traditional Bengali snacks on brass plate, wooden table, warm light, steam rising, authentic Indian tea, photorealistic, cozy atmosphere",
      output: `${base}/gallery/food/food-2.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Authentic Bengali fish curry in terracotta bowl with steamed rice, mustard gravy, fresh coriander garnish, warm light, traditional Indian food photography, photorealistic, appetizing, no people",
      output: `${base}/gallery/food/food-3.jpg`,
      size: '1024x1024'
    },
    {
      prompt: "Assorted traditional Bengali sweets mishti on brass tray, sandesh rasgulla pantua, decorative presentation, warm ambient light, Indian dessert photography, photorealistic, appetizing, no people",
      output: `${base}/gallery/food/food-4.jpg`,
      size: '1024x1024'
    },
  ];

  console.log(`Generating ${images.length} images...`);
  
  // Generate images in batches of 3 to avoid rate limits
  const batchSize = 3;
  for (let i = 0; i < images.length; i += batchSize) {
    const batch = images.slice(i, i + batchSize);
    const promises = batch.map(img => generateImage(img.prompt, img.output, img.size));
    await Promise.all(promises);
    // Small delay between batches
    if (i + batchSize < images.length) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log('\nImage generation complete!');
}

main().catch(console.error);
