export async function notifyVisitor() {
  try {
    // Simple visitor tracking for Next.js
    console.log('Visitor tracked:', {
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      domain: typeof window !== 'undefined' ? window.location.hostname : 'Unknown'
    })
  } catch (error) {
    console.error('Failed to track visitor:', error)
  }
}