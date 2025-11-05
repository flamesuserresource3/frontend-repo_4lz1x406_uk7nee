import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'For trying things out',
    features: ['100 customers', 'Basic analytics', 'Community support'],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    highlight: 'For small teams scaling',
    features: ['5k customers', 'Usage-based billing', 'Customer portal', 'Analytics & exports'],
    cta: 'Choose Growth',
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: 'For high-volume platforms',
    features: ['Dedicated region', 'SLA & SSO', 'Priority support', 'Compliance add-ons'],
    cta: 'Contact sales',
  },
];

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Pricing</h2>
          <p className="mt-2 text-gray-700">Simple, transparent plans that grow with you.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.popular ? 'border-gray-900' : 'border-black/10'} bg-white p-6 shadow-sm`}>
              {t.popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">Popular</div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{t.highlight}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-gray-900">{t.price}</span>
                <span className="text-gray-600">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> {f}</li>
                ))}
              </ul>
              <button onClick={() => onSelectPlan(t.name)} className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium ${t.popular ? 'bg-gray-900 text-white hover:bg-black' : 'border border-black/10 text-gray-900 hover:bg-gray-50'}`}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
