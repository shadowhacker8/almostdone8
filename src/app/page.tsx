'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import FeaturedProduct from '@/components/FeaturedProduct'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import { getProducts, getFeaturedProducts } from '@/lib/products'
import { notifyVisitor } from '@/utils/visitor'
import type { Product } from '@/types/product'

export default function HomePage() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const [products, featured] = await Promise.all([
          getProducts(),
          getFeaturedProducts()
        ])
        setAllProducts(products)
        setFeaturedProducts(featured)
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  useEffect(() => {
    // Only notify about visitor once per session
    if (typeof window !== 'undefined') {
      const hasNotified = sessionStorage.getItem('visitorNotified')
      if (!hasNotified) {
        notifyVisitor()
        sessionStorage.setItem('visitorNotified', 'true')
      }
    }
  }, [])

  useEffect(() => {
    if (!loading && searchParams?.get('scrollTo')) {
      const element = document.getElementById(searchParams.get('scrollTo')!)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [loading, searchParams])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0046be]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Products Section */}
        <section id="featured" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Today's Deals</h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium tech gadgets that stand out for their exceptional quality and performance.
              </p>
            </div>
            
            <div className="space-y-12">
              {featuredProducts.map((product) => (
                <FeaturedProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* All Products Section */}
        <ProductGrid products={allProducts} />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Read reviews from photographers who have purchased from our store.
              </p>
            </div>
            
            <Reviews productSlug="general" />
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-[#0046be]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive updates on new products, special offers, and photography tips.
            </p>
            <form className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button 
                type="submit"
                className="bg-[#313a4b] hover:bg-[#262d3b] text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}