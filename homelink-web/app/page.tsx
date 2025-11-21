import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Hero Section */}
      <header className="bg-[var(--color-primary-ochre)] text-white">
        <div className="container-custom py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">HomeLink Addis</h1>
          <p className="text-xl mb-8 opacity-90">
            Connecting Ethiopian Domestic Workers with Verified Employers
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/employer/dashboard">
              <Button variant="secondary" size="large">
                Employer Portal
              </Button>
            </Link>
            <Link href="/agency/dashboard">
              <Button variant="tertiary" size="large">
                Agency Portal
              </Button>
            </Link>
            <Link href="/admin/verification">
              <Button variant="ghost" size="large">
                Admin Portal
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="/admin/accommodation" className="text-sm text-white opacity-75 hover:opacity-100 underline">
              Accommodation Center →
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose HomeLink Addis?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--color-success)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Workers</h3>
            <p className="text-[var(--color-text-secondary)]">
              All workers undergo thorough ID, age, and emergency contact verification
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--color-secondary-teal)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold mb-2">Trust Score System</h3>
            <p className="text-[var(--color-text-secondary)]">
              Dynamic trust scores based on performance, feedback, and reliability
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--color-tertiary-wheat)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
              🔄
            </div>
            <h3 className="text-xl font-bold mb-2">30-Day Guarantee</h3>
            <p className="text-[var(--color-text-secondary)]">
              Free replacement within 30 days if you're not satisfied
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">60+</div>
              <div className="text-[var(--color-text-secondary)]">Verified Workers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">100%</div>
              <div className="text-[var(--color-text-secondary)]">ID Verified</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">85+</div>
              <div className="text-[var(--color-text-secondary)]">Average Trust Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">24/7</div>
              <div className="text-[var(--color-text-secondary)]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Find the perfect worker for your home or business today
        </p>
        <Link href="/employer/search">
          <Button variant="primary" size="large">
            Start Searching
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-neutral-charcoal)] text-white py-8">
        <div className="container-custom text-center">
          <p className="text-sm opacity-75">
            © 2025 HomeLink Addis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
