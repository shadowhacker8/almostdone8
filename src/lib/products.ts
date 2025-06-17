import type { Product } from '@/types/product'

// Static product data for Next.js static export
const staticProducts: Product[] = [
  {
    id: 'canon-camera-g7x-mark-iii',
    slug: 'canon-camera-g7x-mark-iii',
    title: 'Canon PowerShot G7 X Mark III 20.1MP Digital Point & Shoot Camera - Black',
    description: 'Tested, it works. It does have some scrapes and paint wear, which can be seen in the pictures. This doesn\'t affect the camera performance. The screen also has some scratches, which I provided a close-up picture of. The lens has some dust inside but no scratches. This doesn\'t affect the image quality. *No battery charger or cable* Includes - Battery (Original) - 256GB Memory Card',
    price: 599.95,
    rating: 5,
    reviewCount: 1,
    images: [
      '/products/canon-camera-g7x-mark-iii/img1.webp',
      '/products/canon-camera-g7x-mark-iii/img2.webp',
      '/products/canon-camera-g7x-mark-iii/img3.webp',
      '/products/canon-camera-g7x-mark-iii/img4.webp',
      '/products/canon-camera-g7x-mark-iii/img5.webp',
      '/products/canon-camera-g7x-mark-iii/img6.webp',
      '/products/canon-camera-g7x-mark-iii/img7.webp',
      '/products/canon-camera-g7x-mark-iii/img8.webp',
      '/products/canon-camera-g7x-mark-iii/img9.webp',
      '/products/canon-camera-g7x-mark-iii/img10.webp',
      '/products/canon-camera-g7x-mark-iii/img11.webp',
      '/products/canon-camera-g7x-mark-iii/img12.webp'
    ],
    condition: 'Used - Like New',
    category: 'Digital Cameras',
    brand: 'Canon',
    payeeEmail: 'happyemilliano@gmail.com',
    currency: 'USD',
    checkoutLink: 'https://buymeacoffee.com/annahoffman/extras/checkout/9f222fa7-139c-431c-897d-1f00b0fefd0f',
    meta: {
      title: 'Canon Camera G7X Mark III - Compact Digital Vlogging Camera',
      description: 'Discover the Canon PowerShot G7X Mark III, a premium compact digital camera perfect for vlogging and high-quality photos. Features 4K video, 20.1MP sensor, and livestreaming. Excellent condition.',
      keywords: 'Canon G7X Mark III, compact camera, digital camera, vlogging camera, 4K video, livestreaming, Canon PowerShot, used camera, photography'
    }
  },
  {
    id: 'meta-quest-3s-128gb-complete-set-excellent-condition',
    slug: 'meta-quest-3s-128gb-complete-set-excellent-condition',
    title: 'Meta Quest 3S 128GB – Complete Set, Excellent Condition',
    description: 'This is a used Meta Quest 3S 128GB. The item has been previously owned and may show some signs of cosmetic wear, but it is fully functional and in nice condition. It features connectivity options including Bluetooth and WiFi. Manufactured in 2024, this device offers a storage capacity of 128GB. The brand is Meta.',
    price: 189.90,
    rating: 4.2,
    reviewCount: 5,
    images: [
      '/products/meta-quest-3s-128gb-complete-set-excellent-condition/img1.webp',
      '/products/meta-quest-3s-128gb-complete-set-excellent-condition/img2.webp'
    ],
    condition: 'Used - Excellent Condition',
    category: 'Virtual Reality',
    brand: 'Meta',
    payeeEmail: 'happyemilliano@gmail.com',
    currency: 'USD',
    checkoutLink: 'https://buymeacoffee.com/annahoffman/extras/checkout/9f225648-b89d-4b02-b3e0-9bc2d3f18a33',
    meta: {
      title: 'Meta Quest 3S 128GB - Complete VR Set in Excellent Condition',
      description: 'Explore virtual worlds with the Meta Quest 3S 128GB VR headset. This complete set offers immersive experiences and comes in excellent, well-maintained condition. Perfect for gaming, entertainment, and productivity.',
      keywords: 'Meta Quest 3S, VR headset, virtual reality, 128GB, complete set, used VR, Meta Quest, VR gaming, immersive experience'
    }
  },
  {
    id: 'ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed',
    slug: 'ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed',
    title: 'Ninja SLUSHi Frozen Drink Maker 3-in-1, 72oz, New Sealed',
    description: 'Brand new Ninja SLUSHi FS300 Frozen Drink Maker (sealed in original packaging). Features a 72 oz capacity, 3 speeds, and dishwasher safe parts. Made of durable ABS plastic in gray color. Runs on 120V electric power with 200W motor. Dimensions: 16.28 inch x 6.52 inch x 16.43 inch. Weighs 23.37 lbs. UPC/EAN: 622356633383. MPN: FS300.',
    price: 229.97,
    rating: 4.7,
    reviewCount: 553,
    images: [
      '/products/ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed/img1.webp',
      '/products/ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed/img2.webp',
      '/products/ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed/img3.webp',
      '/products/ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed/img4.webp',
      '/products/ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed/img5.webp',
      '/products/ninja-slushi-frozen-drink-maker-3-in-1-72-oz-new-sealed/img6.webp'
    ],
    condition: 'New',
    category: 'Frozen Drink & Slush Machines',
    brand: 'Ninja',
    payeeEmail: 'happyemilliano@gmail.com',
    currency: 'USD',
    checkoutLink: 'https://buymeacoffee.com/annahoffman/extras/checkout/9f224fcd-e307-4628-80b3-28751c0057fa',
    meta: {
      title: 'Ninja SLUSHi Frozen Drink Maker 3-in-1, 72oz, New Sealed - HappyDeel',
      description: 'Brand new Ninja SLUSHi FS300 Frozen Drink Maker (sealed in original packaging). Features a 72 oz capacity, 3 speeds, and dishwasher safe parts. Perfect for making frozen drinks, slushies, and smoothies.',
      keywords: 'Ninja SLUSHi, Frozen Drink Maker, 3-in-1, 72oz, New, Sealed, Slushie Machine, Smoothie Maker, Kitchen Appliance, HappyDeel'
    }
  }
]

// Cache products in memory for faster access
let productsCache: Product[] | null = null

export async function getProducts(): Promise<Product[]> {
  if (productsCache) {
    return productsCache
  }
  
  // For static export, use the static data
  productsCache = staticProducts
  return productsCache
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!productsCache) {
    await getProducts()
  }
  return productsCache?.find(product => product.slug === slug)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!productsCache) {
    await getProducts()
  }
  return (productsCache || [])
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
}

export async function getRelatedProducts(slug: string): Promise<Product[]> {
  if (!productsCache) {
    await getProducts()
  }
  
  const currentProduct = productsCache?.find(p => p.slug === slug)
  
  if (!currentProduct) return []
  
  return (productsCache || [])
    .filter(product => 
      product.category === currentProduct.category && 
      product.slug !== slug
    )
    .slice(0, 3)
}