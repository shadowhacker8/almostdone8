'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, Package, Truck, CheckCircle } from 'lucide-react'

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    setIsLoading(true)
    
    // Simulate tracking lookup
    setTimeout(() => {
      setTrackingResult({
        number: trackingNumber,
        status: 'In Transit',
        estimatedDelivery: 'December 28, 2024',
        updates: [
          { date: 'Dec 24, 2024', time: '2:30 PM', status: 'Package shipped', location: 'Columbus, OH' },
          { date: 'Dec 25, 2024', time: '8:15 AM', status: 'In transit', location: 'Chicago, IL' },
          { date: 'Dec 26, 2024', time: '11:45 AM', status: 'Out for delivery', location: 'Your city' }
        ]
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-[#0046be] hover:text-[#003494] mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Track Your Order</h1>
              
              <form onSubmit={handleTrack} className="mb-8">
                <div className="mb-4">
                  <label htmlFor="tracking" className="block text-sm font-medium text-gray-700 mb-2">
                    Tracking Number
                  </label>
                  <input
                    type="text"
                    id="tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter your tracking number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0046be] hover:bg-[#003494] text-white font-medium py-3 rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Tracking...' : 'Track Package'}
                </button>
              </form>

              {trackingResult && (
                <div className="border-t pt-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Tracking Results</h2>
                    <p className="text-gray-600">Tracking Number: {trackingResult.number}</p>
                    <p className="text-gray-600">Status: <span className="font-medium text-[#0046be]">{trackingResult.status}</span></p>
                    <p className="text-gray-600">Estimated Delivery: {trackingResult.estimatedDelivery}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Tracking Updates</h3>
                    {trackingResult.updates.map((update: any, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          {index === trackingResult.updates.length - 1 ? (
                            <Truck className="h-5 w-5 text-[#0046be] mt-1" />
                          ) : index === 0 ? (
                            <Package className="h-5 w-5 text-gray-400 mt-1" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          )}
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium text-gray-900">{update.status}</p>
                          <p className="text-sm text-gray-600">{update.location}</p>
                          <p className="text-sm text-gray-500">{update.date} at {update.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  If you have any questions about your order or need assistance with tracking, please contact our customer support team.
                </p>
                <Link 
                  href="/contact"
                  className="text-[#0046be] hover:text-[#003494] font-medium text-sm"
                >
                  Contact Support →
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