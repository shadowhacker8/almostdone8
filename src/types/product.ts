export interface Product {
  id: string
  slug: string
  title: string
  description: string
  price: number
  rating: number
  reviewCount: number
  images: string[]
  condition: string
  category: string
  brand: string
  payeeEmail: string
  currency: string
  checkoutLink: string
  meta?: {
    title?: string
    description?: string
    keywords?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    twitterTitle?: string
    twitterDescription?: string
    twitterImage?: string
  }
}