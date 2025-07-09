import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your <span className="text-blue-600">Inside Sales Engine</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maria Bertone helps SaaS and tech companies design data-driven GTM strategies, 
            build high-performing SDR teams, and unlock predictable revenue growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/tools/inside-sales-check"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              🔍 Run the 5-Minute Health Check
            </Link>
            <Link
              href="/tools/pipeline-velocity"
              className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all"
            >
              📊 Calculate Pipeline Velocity
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            ✅ Free tools • ✅ Instant results • ✅ No signup required
          </p>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Top SaaS Companies Choose Maria
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Results</h3>
              <p className="text-gray-600">
                Increase qualified leads by 40-60% through optimized processes and proven methodologies.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Implementation</h3>
              <p className="text-gray-600">
                See measurable improvements within 30-60 days with battle-tested frameworks.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Strategy</h3>
              <p className="text-gray-600">
                Custom solutions designed for your ICP, market, and growth stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Preview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Start With Our Free Assessment Tools
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get instant insights into your sales engine performance and identify 
            opportunities for immediate improvement.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Inside Sales Health Check
              </h3>
              <p className="text-gray-600 mb-6">
                Benchmark your sales process across People, Process, Technology, and Pipeline 
                to identify gaps and opportunities.
              </p>
              <Link
                href="/tools/inside-sales-check"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Assessment →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pipeline Velocity Calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Calculate your potential revenue upside by optimizing key metrics 
                like conversion rates and cycle time.
              </p>
              <Link
                href="/tools/pipeline-velocity"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Calculate Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Trusted by Growing SaaS Companies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">40-60%</div>
              <p className="text-gray-600">Increase in qualified leads</p>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">30-45 days</div>
              <p className="text-gray-600">Time to see measurable results</p>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">25+ companies</div>
              <p className="text-gray-600">Successfully transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Engine?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with our free assessment tools or book a strategy call to discuss 
            your specific challenges and opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/inside-sales-check"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Assessment
            </Link>
            <a
              href="https://calendly.com/maria-bertone/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-blue-700"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Maria Bertone</h3>
          <p className="text-gray-400 mb-6">Inside Sales & GTM Consultant</p>
          <p className="text-sm text-gray-500">
            © 2024 Maria Bertone Consultancy. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}