import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transform Your <span className="text-blue-600 underline decoration-wavy">Inside Sales Engine</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maria Bertone partners with SaaS and high-growth companies to architect scalable revenue engines,
            optimise GTM strategy, and build elite inside sales teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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

          <p className="text-sm text-gray-500">No signup. No fluff. Just insights.</p>
        </div>
      </section>

      {/* Why Maria */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 underline decoration-blue-400">
            Why SaaS Companies Work With Maria
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📈",
                title: "Data-Driven Results",
                desc: "40–60% more qualified leads through CRM design and funnel optimisation.",
              },
              {
                icon: "⚡",
                title: "Rapid Implementation",
                desc: "Clear deliverables and results in <45 days. No endless strategy decks.",
              },
              {
                icon: "🎯",
                title: "Tailored Growth Strategy",
                desc: "Each plan is adapted to your ICP, stage, and sales maturity.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-6 rounded-xl border shadow-sm hover:shadow-lg bg-gray-50 transition"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 underline decoration-blue-400">
            Free Diagnostic Tools
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore interactive tools to uncover gaps, benchmark your team, and accelerate growth — instantly.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tool 1: Inside Sales Check */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Inside Sales Health Check
              </h3>
              <p className="text-gray-600 mb-4">
                Evaluate alignment across People, Process, Technology, and Pipeline.
              </p>
              <Link
                href="/tools/inside-sales-check"
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                Start Assessment →
              </Link>
            </div>

            {/* Tool 2: Pipeline Velocity */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Pipeline Velocity Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Quantify your revenue potential by optimising key GTM inputs.
              </p>
              <Link
                href="/tools/pipeline-velocity"
                className="inline-block text-green-600 font-semibold hover:underline"
              >
                Calculate Now →
              </Link>
            </div>

            {/* Tool 3: Funnel Friction */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Funnel Friction Finder
              </h3>
              <p className="text-gray-600 mb-4">
                Visualise stage-to-stage drop-offs and get quick-win recommendations.
              </p>
              <Link
                href="/tools/funnel-friction"
                className="inline-block text-red-600 font-semibold hover:underline"
              >
                Find Friction →
              </Link>
            </div>

            {/* Tool 4: Rep Readiness */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Rep Readiness Radar
              </h3>
              <p className="text-gray-600 mb-4">
                Score SDR or AE skills across objection handling, tech use, and product fluency.
              </p>
              <Link
                href="/tools/rep-readiness"
                className="inline-block text-yellow-600 font-semibold hover:underline"
              >
                Launch Radar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 underline decoration-blue-400">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
            <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-4">
                “Maria helped us go from chaos to clarity. Within weeks, we had a pipeline rhythm we hadn’t seen in years.”
              </p>
              <footer className="text-sm text-gray-500">— COO, SaaS Platform</footer>
            </blockquote>
            <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-600">
              <p className="text-lg text-gray-700 mb-4">
                “She doesn’t just give advice — she embeds, diagnoses, builds, and delivers transformation.”
              </p>
              <footer className="text-sm text-gray-500">— VP Sales, Industrial Software</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Restructure Your Revenue Engine
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Book a free strategy call or try one of the tools above to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/maria-bertone/strategy-call"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Book Strategy Call
            </a>
            <a
              href="mailto:bertonemaria@gmail.com"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700"
            >
              ✉️ Contact via Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto">
          <h3 className="text-xl font-bold mb-2">Maria Bertone</h3>
          <p className="text-gray-400 mb-4">Inside Sales & Revenue Growth Consultant</p>
          <p className="text-sm text-gray-500">© 2025 Maria Bertone Ltd.</p>
        </div>
      </footer>
    </main>
  );
}