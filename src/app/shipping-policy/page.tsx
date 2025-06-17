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
            
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Last updated: December 2024</p>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Free Shipping</h2>
                <p>We offer free standard shipping on all orders to customers in the United States and Canada. No minimum order required!</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processing Time</h2>
                <p>Orders are typically processed within 1-2 business days. During peak seasons or sales events, processing may take up to 3-5 business days.</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Orders placed before 2 PM EST are usually processed the same day</li>
                  <li>Weekend orders are processed on the next business day</li>
                  <li>Holiday processing times may vary</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Delivery Times</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 mt-4">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left">Location</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Standard Shipping</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Express Shipping</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">United States</td>
                        <td className="border border-gray-200 px-4 py-2">5-8 business days</td>
                        <td className="border border-gray-200 px-4 py-2">2-3 business days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">Canada</td>
                        <td className="border border-gray-200 px-4 py-2">7-12 business days</td>
                        <td className="border border-gray-200 px-4 py-2">3-5 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Methods</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard Shipping:</strong> Free for all orders via USPS or Canada Post</li>
                  <li><strong>Express Shipping:</strong> Available for an additional fee via FedEx or UPS</li>
                  <li><strong>Overnight Shipping:</strong> Available in select areas for urgent orders</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Order Tracking</h2>
                <p>Once your order ships, you'll receive a tracking number via email. You can track your package using our tracking page or directly on the carrier's website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Shipping</h2>
                <p>Currently, we only ship to the United States and Canada. We're working on expanding to additional countries in the future.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Restrictions</h2>
                <p>Some items may have shipping restrictions:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Large items may require special handling</li>
                  <li>Certain electronics may have shipping limitations</li>
                  <li>Hazardous materials cannot be shipped</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Delivery Issues</h2>
                <p>If you experience any delivery issues:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Check with neighbors or building management</li>
                  <li>Contact the shipping carrier directly</li>
                  <li>Reach out to our customer service team for assistance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                <p>For shipping questions or concerns, please contact us:</p>
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