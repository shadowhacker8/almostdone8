import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - HappyDeel',
  description: 'Read the terms and conditions for using HappyDeel services.',
}

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Last updated: December 2024</p>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using HappyDeel's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials on HappyDeel's website for personal, non-commercial transitory viewing only.</p>
                <p className="mt-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by HappyDeel at any time.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Product Information</h2>
                <p>We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Pricing and Payment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are subject to change without notice</li>
                  <li>Payment must be received before products are shipped</li>
                  <li>We accept major credit cards and PayPal</li>
                  <li>All transactions are processed securely</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Shipping and Delivery</h2>
                <p>We offer free shipping to US and Canada customers. Delivery times may vary based on location and product availability.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Returns and Refunds</h2>
                <p>We offer a 30-day return policy for most items. Products must be returned in original condition. Please see our Return Policy for complete details.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
                <p>In no event shall HappyDeel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HappyDeel's website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of Ohio, USA.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="mt-4">
                  <p>Email: support@happydeel.com</p>
                  <p>Phone: +17176484487</p>
                  <p>Address: 1726 Parsons Ave, Columbus, OH 43207, USA</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}