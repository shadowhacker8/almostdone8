import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - HappyDeel',
  description: 'Learn about how HappyDeel collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at support@happydeel.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}