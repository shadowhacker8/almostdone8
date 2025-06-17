import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, Package, Truck, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Track Your Order - HappyDeel',
  description: 'Track your HappyDeel order status and get real-time updates on your shipment.',
}

export default function TrackPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Track Your Order</h1>
            
            <div className="max-w-2xl">
              <div className="mb-8">
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="orderNumber"
                    placeholder="Enter your order number"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-transparent"
                  />
                  <button className="bg-[#0046be] hover:bg-[#003494] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                    Track
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Status</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0046be] rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Order Confirmed</p>
                      <p className="text-sm text-gray-500">Your order has been received and confirmed</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0046be] rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Processing</p>
                      <p className="text-sm text-gray-500">Your order is being prepared for shipment</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-500">Shipped</p>
                      <p className="text-sm text-gray-500">Your order is on its way</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-500">Delivered</p>
                      <p className="text-sm text-gray-500">Your order has been delivered</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  If you have any questions about your order, please contact our customer service team.
                </p>
                <Link href="/contact" className="text-[#0046be] hover:text-[#003494] font-medium">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}