import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Cookies Policy - HappyDeel',
  description: 'Learn about how HappyDeel uses cookies and similar technologies.',
}

export default function CookiesPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookies Policy</h1>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies to remember your preferences, analyze website traffic, and improve our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Cookies</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors use our website</li>
                <li>Preference cookies: Remember your settings and preferences</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about our use of cookies, please contact us at support@happydeel.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}