import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Shipping Policy - HappyDeel',
  description: 'Learn about HappyDeel shipping options, delivery times, and policies.',
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-[#0046be] hover:text-[#003494] mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Free Shipping</h2>
              <p className="mb-4">
                We offer free standard shipping on all orders to the United States and Canada. No minimum order required.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processing Time</h2>
              <p className="mb-4">
                Orders are typically processed within 1-2 business days. You will receive a tracking number once your order ships.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Delivery Time</h2>
              <p className="mb-4">
                Standard shipping usually takes 5-8 business days for delivery within the US and Canada.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Shipping</h2>
              <p className="mb-4">
                Currently, we only ship to the United States and Canada. International shipping may be available in the future.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                For shipping questions, please contact us at support@happydeel.com or call +17176484487.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}