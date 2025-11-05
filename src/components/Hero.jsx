import Spline from '@splinetool/react-spline';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500" /> Now live
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            The product hub for modern fintech teams
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Build, launch, and scale your software portfolio with anoofx labs. A unified platform for subscriptions, licensing, and delightful customer experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onGetStarted} className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-black">
              Get started free
            </button>
            <a href="#products" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-white">
              Explore products
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-gray-600">
            <div>
              <div className="text-gray-900 font-semibold">99.99% uptime</div>
              Enterprise-ready
            </div>
            <div>
              <div className="text-gray-900 font-semibold">SOC2</div>
              Security-first
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Global</div>
              Multi-region
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Fast</div>
              Sub-100ms APIs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
