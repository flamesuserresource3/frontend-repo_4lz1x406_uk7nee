import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Pricing from './components/Pricing.jsx';

function AuthModal({ mode, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const title = mode === 'sign-up' ? 'Create your account' : 'Welcome back';
  const action = mode === 'sign-up' ? 'Create account' : 'Sign in';

  const submit = (e) => {
    e.preventDefault();
    alert(`${action} with ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">Sign in to manage subscriptions and products.</p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">{action}</button>
        </form>
        <button onClick={onClose} className="mt-3 w-full text-center text-sm text-gray-600 hover:underline">Cancel</button>
      </div>
    </div>
  );
}

export default function App() {
  const [authMode, setAuthMode] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onOpenAuth={(m) => setAuthMode(m)} />
      <Hero onGetStarted={() => setAuthMode('sign-up')} />
      <Products />
      <Pricing onSelectPlan={() => setAuthMode('sign-up')} />

      <section id="about" className="py-16 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold">Built for velocity</h3>
            <p className="mt-2 text-gray-700">We combine streamlined workflows, sensible defaults, and enterprise-grade security so your team can ship faster with confidence.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-black/10 p-4"><div className="text-sm font-semibold">Global infrastructure</div><div className="text-sm text-gray-600">Multi-region edge with auto-failover.</div></div>
            <div className="rounded-xl border border-black/10 p-4"><div className="text-sm font-semibold">Security by default</div><div className="text-sm text-gray-600">SSO, SAML, audit logs, roles.</div></div>
            <div className="rounded-xl border border-black/10 p-4"><div className="text-sm font-semibold">Developer-first</div><div className="text-sm text-gray-600">Clean APIs, webhooks, great docs.</div></div>
            <div className="rounded-xl border border-black/10 p-4"><div className="text-sm font-semibold">Observability</div><div className="text-sm text-gray-600">Real-time metrics and tracing.</div></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} anoofx labs. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-gray-700 hover:underline" href="#pricing">Pricing</a>
            <a className="text-gray-700 hover:underline" href="#products">Products</a>
            <button onClick={() => setAuthMode('sign-in')} className="text-gray-700 hover:underline">Sign in</button>
          </div>
        </div>
      </footer>

      {authMode && <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />}
    </div>
  );
}
