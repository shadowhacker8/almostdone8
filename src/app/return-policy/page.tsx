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
            
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Last updated: December 2024</p>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">30-Day Return Policy</h2>
                <p>We want you to be completely satisfied with your purchase. If you're not happy with your item, you can return it within 30 days of delivery for a full refund or exchange.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Return Conditions</h2>
                <p>To be eligible for a return, your item must be:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>In the same condition that you received it</li>
                  <li>Unworn or unused</li>
                  <li>With tags and in original packaging</li>
                  <li>Accompanied by proof of purchase</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Non-Returnable Items</h2>
                <p>Certain items cannot be returned:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Personalized or customized items</li>
                  <li>Items damaged by misuse</li>
                  <li>Software or digital products</li>
                  <li>Items returned more than 30 days after delivery</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Return an Item</h2>
                <ol className="list-decimal pl-6 mt-4 space-y-2">
                  <li>Contact our customer service team at support@happydeel.com</li>
                  <li>Provide your order number and reason for return</li>
                  <li>We'll send you a return authorization and shipping label</li>
                  <li>Package the item securely and attach the return label</li>
                  <li>Drop off at any authorized shipping location</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Process</h2>
                <p>Once we receive your returned item, we will:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Inspect the item within 2-3 business days</li>
                  <li>Send you an email confirmation of the refund</li>
                  <li>Process the refund to your original payment method</li>
                  <li>Refunds typically appear within 5-10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exchanges</h2>
                <p>We currently only offer refunds, not exchanges. If you need a different size or color, please return the original item and place a new order.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Damaged or Defective Items</h2>
                <p>If you receive a damaged or defective item, please contact us immediately. We'll provide a prepaid return label and expedite your refund or replacement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                <p>If you have any questions about returns or refunds, please contact us:</p>
                <div className="mt-4">
                  <p>Email: support@happydeel.com</p>
                  <p>Phone: +17176484487</p>
                  <p>Hours: Monday-Friday, 9 AM - 5 PM EST</p>
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