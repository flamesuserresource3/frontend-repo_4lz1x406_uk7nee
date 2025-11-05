import { CreditCard, Shield, Rocket } from 'lucide-react';

const products = [
  {
    name: 'Subscriptions',
    icon: CreditCard,
    description:
      'Flexible plans, coupons, proration, and dunning. Everything you need to run recurring revenue at scale.',
    features: ['Usage-based billing', 'Self-serve portal', 'Revenue analytics'],
  },
  {
    name: 'Licensing',
    icon: Shield,
    description:
      'Robust license generation and validation for desktop and server software. Secure and simple.',
    features: ['Offline activation', 'Seat management', 'Entitlements'],
  },
  {
    name: 'Launchpad',
    icon: Rocket,
    description:
      'Update delivery, release notes, and in-app messaging to keep your customers engaged and up to date.',
    features: ['Delta updates', 'Targeted rollouts', 'Changelogs'],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Products</h2>
          <p className="mt-2 text-gray-700">
            A suite of tools to handle payments, licensing, and customer experience from one place.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-blue-600/10 to-orange-500/10 grid place-items-center text-blue-700">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#pricing" className="mt-6 inline-flex items-center text-sm font-medium text-gray-900 hover:underline">View pricing →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
