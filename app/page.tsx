import { Github, Sparkles, Zap, Code, Shield, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">Agit</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Github className="w-4 h-4" />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Turn <span className="text-blue-600">Ideas</span> Into
          <span className="block">Production-Ready Code</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Describe your web app in plain English. Watch as AI generates clean, 
          production-ready code and creates a GitHub repository — all in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <Sparkles className="w-5 h-5" />
            Start Generating Free
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <Github className="w-5 h-5" />
            View on GitHub
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Developers Love Agit</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Sparkles />, title: 'AI-Powered', desc: 'Generate with advanced AI' },
            { icon: <Github />, title: 'GitHub Integration', desc: 'Automatic repository creation' },
            { icon: <Zap />, title: 'Lightning Fast', desc: 'Generate in minutes' },
            { icon: <Code />, title: 'Multi-Framework', desc: 'React, Vue, Angular, and more' },
            { icon: <Shield />, title: 'Secure & Private', desc: 'Enterprise-grade security' },
            { icon: <Clock />, title: 'Real-Time Progress', desc: 'Track generation status' },
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <div className="text-blue-600">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Agit Works</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { step: 1, title: 'Describe Your Idea', desc: 'Tell us what you want to build in plain English.' },
              { step: 2, title: 'AI Generates Code', desc: 'AI analyzes your description and generates clean code.' },
              { step: 3, title: 'GitHub Repository', desc: 'Automatically creates a GitHub repository with files.' },
              { step: 4, title: 'Deploy & Share', desc: 'One-click deployment to Vercel, Netlify, etc.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers building faster with Agit.
          </p>
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors mx-auto">
            <Sparkles className="w-6 h-6" />
            Start Building Free
          </button>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • 3 free generations per month
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">Agit</span>
            </div>
            <div className="text-sm text-gray-600">
              <p>© {new Date().getFullYear()} Agit. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ for developers</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
