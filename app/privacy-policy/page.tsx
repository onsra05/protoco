import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for " + SITE_CONFIG.name + " portfolio website.",
};

const LAST_UPDATED = "2025-01-01";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <Link
            href="/"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="prose prose-invert max-w-none">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mb-10 text-sm text-muted-foreground">
            Last updated: {new Date(LAST_UPDATED).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <Section title="1. Introduction">
            <p>
              Welcome to <strong className="text-foreground">{SITE_CONFIG.name}</strong> (
              <a href={SITE_CONFIG.url} className="text-accent hover:underline">
                {SITE_CONFIG.url}
              </a>
              ). This Privacy Policy explains how we collect, use, and protect information when
              you visit our website. By using this website, you agree to the terms described in
              this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong className="text-foreground">Usage Data:</strong> Information about how
                you interact with our website, including pages visited, time spent, browser type,
                device type, and referring URLs. This is collected automatically via analytics
                tools.
              </li>
              <li>
                <strong className="text-foreground">Contact Information:</strong> When you submit
                the contact form, we collect your name, email address, subject, and message
                content.
              </li>
              <li>
                <strong className="text-foreground">Cookies:</strong> Small data files stored on
                your device used to improve your browsing experience and serve relevant
                advertisements.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries submitted via the contact form</li>
              <li>Analyze website traffic and improve the user experience</li>
              <li>Display personalized advertisements through Google AdSense</li>
              <li>Ensure the security and proper functioning of the website</li>
            </ul>
          </Section>

          <Section title="4. Google AdSense and Advertising">
            <p>
              This website uses <strong className="text-foreground">Google AdSense</strong>, an
              advertising service provided by Google LLC. Google AdSense uses cookies to serve
              ads based on your prior visits to this website and other sites on the internet.
            </p>
            <p>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads
              based on your visit to this and other websites. You may opt out of personalized
              advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
            <p>
              For more information about how Google uses data, please visit{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                How Google uses data when you use our partners&apos; sites or apps
              </a>
              .
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our
              website. Cookies are small text files stored on your device.
            </p>
            <p>We use the following types of cookies:</p>
            <ul>
              <li>
                <strong className="text-foreground">Essential Cookies:</strong> Necessary for the
                website to function properly.
              </li>
              <li>
                <strong className="text-foreground">Analytics Cookies:</strong> Help us understand
                how visitors interact with the website.
              </li>
              <li>
                <strong className="text-foreground">Advertising Cookies:</strong> Used by Google
                AdSense to deliver relevant advertisements.
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies
              may affect the functionality of the website.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              Our website may use third-party services that have their own privacy policies:
            </p>
            <ul>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Google Privacy Policy
                </a>{" "}
                — Google AdSense, Google Analytics
              </li>
              <li>
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub Privacy Statement
                </a>{" "}
                — Repository hosting
              </li>
            </ul>
            <p>
              We are not responsible for the privacy practices of these third-party services.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              Contact form submissions are retained only as long as necessary to respond to your
              inquiry. Usage data collected via analytics is retained according to the respective
              service&apos;s data retention policy.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to opt out of personalized advertising</li>
              <li>
                The right to lodge a complaint with a supervisory authority (for EU residents
                under GDPR)
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-accent hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              This website is not directed at children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has provided us
              with personal information, please contact us and we will promptly delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes by updating the &quot;Last updated&quot; date at the top of
              this page. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-accent hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <strong className="text-foreground">Website:</strong>{" "}
                <a href={SITE_CONFIG.url} className="text-accent hover:underline">
                  {SITE_CONFIG.url}
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.{" "}
            <Link href="/" className="text-accent hover:underline">
              Back to Home
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold text-foreground">{title}</h2>
      <div className="space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
