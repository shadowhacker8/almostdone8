import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Return Policy - HappyDeel',
  description: 'Learn about HappyDeel return and refund policy for your purchases.',
}

export default function ReturnPolicyPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Return & Refund Policy</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">30-Day Return Policy</h2>
              <p className="mb-4">
                We offer a 30-day return policy from the date of delivery. Items must be in original condition with all accessories and packaging.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Return Process</h2>
              <p className="mb-4">
                To initiate a return, please contact our customer service team at support@happydeel.com with your order number and reason for return.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Timeline</h2>
              <p className="mb-4">
                Refunds will be processed within 5-7 business days after we receive and inspect the returned item.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Non-Returnable Items</h2>
              <p className="mb-4">
                Certain items cannot be returned for hygiene reasons or if they have been damaged by misuse.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                For any questions about returns or refunds, please contact us at support@happydeel.com or call +17176484487.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}