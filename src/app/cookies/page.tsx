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
            
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Last updated: December 2024</p>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
                <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help us provide you with a better experience by remembering your preferences and improving site functionality.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
                <p>We use cookies for several purposes:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
                
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Shopping cart functionality</li>
                    <li>User authentication</li>
                    <li>Security features</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p>We use Google Analytics to understand how visitors interact with our site:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Page views and traffic sources</li>
                    <li>User behavior patterns</li>
                    <li>Site performance metrics</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Preference Cookies</h3>
                  <p>These cookies remember your choices and preferences:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Language settings</li>
                    <li>Cookie consent preferences</li>
                    <li>Display preferences</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
                <p>We may use third-party services that set their own cookies:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                  <li><strong>Social Media:</strong> For social sharing functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
                <p>You can control cookies through your browser settings:</p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Browser Settings</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                    <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cookie Consent</h3>
                  <p>When you first visit our site, you'll see a cookie consent banner. You can:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your cookie preferences</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookie Retention</h2>
                <p>Different cookies have different lifespans:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain until they expire or you delete them</li>
                  <li><strong>Analytics Cookies:</strong> Typically expire after 2 years</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
                <p>We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                <p>If you have questions about our use of cookies, please contact us:</p>
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