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
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on HappyDeel's website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
              <p className="mb-4">
                The materials on HappyDeel's website are provided on an 'as is' basis. HappyDeel makes no warranties, expressed or implied.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitations</h2>
              <p className="mb-4">
                In no event shall HappyDeel or its suppliers be liable for any damages arising out of the use or inability to use the materials on HappyDeel's website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at support@happydeel.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}