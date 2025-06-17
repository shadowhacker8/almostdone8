'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getCartItem, clearCart } from '@/utils/cart'
import { ArrowLeft, MapPin } from 'lucide-react'
import type { CartItem } from '@/utils/cart'
import { preventScrollOnClick } from '@/utils/scrollUtils'

const CheckoutPage = () => {
  const router = useRouter()
  const [cartItem, setCartItem] = useState<CartItem | null>(null)
  const [currentStep, setCurrentStep] = useState<'shipping' | 'payment'>('shipping')
  const [shippingData, setShippingData] = useState({
    streetAddress: '',
    city: '',
    zipCode: '',
    state: '',
    phoneNumber: ''
  })
  const [stateSuggestions, setStateSuggestions] = useState<string[]>([])
  const [showStateSuggestions, setShowStateSuggestions] = useState(false)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]

  const canadianProvinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan', 'Yukon'
  ]

  const allRegions = [...usStates, ...canadianProvinces]

  useEffect(() => {
    const item = getCartItem()
    if (!item) {
      router.replace('/')
      return
    }
    setCartItem(item)
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setShippingData(prev => ({ ...prev, [name]: value }))

    if (name === 'state') {
      if (value.length >= 2) {
        const filtered = allRegions.filter(region => 
          region.toLowerCase().includes(value.toLowerCase())
        )
        setStateSuggestions(filtered.slice(0, 5))
        setShowStateSuggestions(true)
      } else {
        setStateSuggestions([])
        setShowStateSuggestions(false)
      }
    }
  }

  const handleStateSelect = (state: string) => {
    setShippingData(prev => ({ ...prev, state }))
    setShowStateSuggestions(false)
    setStateSuggestions([])
  }

  const handleContinueToCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!shippingData.streetAddress || !shippingData.city || !shippingData.zipCode || !shippingData.state) {
      alert('Please fill in all shipping address fields')
      return
    }

    preventScrollOnClick(() => {
      setCurrentStep('payment')
    }, true)
  }

  const handleClearCart = () => {
    preventScrollOnClick(() => {
      clearCart()
      router.replace('/')
    }, true)
  }

  const handleIframeLoad = () => {
    setIsIframeLoading(false)
    if (iframeRef.current) {
      const iframe = iframeRef.current
      iframe.style.height = '1200px'
    }

    preventScrollOnClick(() => {
      const paymentSection = document.querySelector('.max-w-6xl')
      if (paymentSection) {
        const rect = paymentSection.getBoundingClientRect()
        window.scrollTo({
          top: rect.top + window.pageYOffset,
          left: 0,
          behavior: 'instant'
        })
      }
    }, true)
  }

  if (!cartItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <Link href="/" className="text-[#0046be] hover:text-[#003494]">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const { product } = cartItem

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Link href={`/products/${product.slug}`} className="inline-flex items-center text-[#0046be] hover:text-[#003494] mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Product
          </Link>

          {currentStep === 'shipping' ? (
            /* Shipping Step - Two Column Layout */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Section - Cart Information */}
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>
                
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded-xl shadow-sm mb-4 sm:mb-0"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 text-lg">{product.title}</h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <p className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full inline-block">{product.condition}</p>
                      <span className="text-sm text-gray-600">Quantity: {cartItem.quantity}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8 space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-[#0046be] bg-blue-50 px-3 py-1 rounded-full">FREE</span>
                  </div>
                  <div className="flex justify-between items-center text-2xl font-bold border-t border-gray-200 pt-6">
                    <span>Total:</span>
                    <span className="text-[#0046be]">${product.price.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleClearCart}
                  className="w-full mt-8 px-6 py-3 text-[#0046be] border-2 border-[#0046be] rounded-xl hover:bg-blue-50 hover:text-[#0046be] transition-all duration-300 font-medium"
                >
                  Clear Cart
                </button>
              </div>

              {/* Right Section - Shipping Form */}
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Shipping Address</h2>
                
                <form onSubmit={handleContinueToCheckout} className="space-y-6">
                  {/* Street Address */}
                  <div>
                    <label htmlFor="streetAddress" className="block text-sm font-semibold text-gray-700 mb-3">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      value={shippingData.streetAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-[#0046be] transition-all duration-300"
                      placeholder="Enter your street address"
                      autoComplete="street-address"
                    />
                  </div>

                  {/* City and State Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-3">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-[#0046be] transition-all duration-300"
                        placeholder="Enter your city"
                        autoComplete="address-level2"
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-3">
                        State/Province *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={shippingData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-[#0046be] transition-all duration-300"
                          placeholder="Enter your state or province"
                          autoComplete="address-level1"
                        />
                        {showStateSuggestions && stateSuggestions.length > 0 && (
                          <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                            {stateSuggestions.map((state) => (
                              <button
                                key={state}
                                type="button"
                                onClick={() => handleStateSelect(state)}
                                className="w-full text-left p-4 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                              >
                                <div className="font-medium text-gray-900">{state}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-3">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-[#0046be] transition-all duration-300"
                      placeholder="10001"
                      autoComplete="postal-code"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={shippingData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-[#0046be] transition-all duration-300"
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                    />
                    <p className="mt-2 text-xs text-gray-500">Needed for secure delivery and order updates</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0046be] hover:bg-[#003494] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Continue to Payment
                  </button>

                  <div className="mt-6 flex flex-col items-center space-y-4">
                    <img 
                      src="/secure-checkout.png" 
                      alt="Secure Checkout" 
                      className="h-8 w-auto max-w-full object-contain"
                    />
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-[#0046be]">SSL Encrypted</span> Secure Checkout
                    </div>
                    <p className="text-xs text-gray-500 text-center max-w-sm">
                      Your information is protected with bank-level security. We use industry-standard SSL encryption to ensure your data remains private and secure.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            /* Payment Step - Full Height Layout */
            <div className="max-w-6xl mx-auto">
              {/* Compact Shipping Summary */}
              <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#0046be] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Shipping to:</h3>
                    <p className="text-gray-600 text-sm">
                      {shippingData.streetAddress}, {shippingData.city}, {shippingData.state} {shippingData.zipCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Height Payment Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
                {isIframeLoading && (
                  <div className="absolute inset-0 bg-white flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0046be]"></div>
                      <p className="text-gray-600">Loading secure checkout...</p>
                    </div>
                  </div>
                )}
                <iframe
                  ref={iframeRef}
                  src={product.checkoutLink}
                  className="w-full border-0"
                  title="Secure Checkout"
                  onLoad={handleIframeLoad}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CheckoutPage