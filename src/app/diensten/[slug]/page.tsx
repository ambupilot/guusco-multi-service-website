import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  const path = `/diensten/${service.slug}`;
  const description = `${service.intro} GuusCo Multiservice in Nijmegen en omgeving.`;

  return {
    title: service.title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${service.title} | GuusCo Multiservice`,
      description,
      url: path,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="service-detail">
      <section className="service-detail__hero">
        <div className="container">
          <nav className="service-detail__breadcrumb" aria-label="Kruimelpad">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/diensten">Diensten</Link>
            <span aria-hidden="true">/</span>
            <span>{service.title}</span>
          </nav>

          <div className="service-detail__hero-inner">
            <div>
              <div className="service-detail__icon" aria-hidden="true">
                <ServiceIcon slug={service.slug} />
              </div>
              <p className="eyebrow">Diensten</p>
              <h1>{service.title}</h1>
              <p className="service-detail__intro">{service.intro}</p>
            </div>

            <div className="service-detail__hero-action">
              <p>
                Een duidelijke klus of meerdere werkzaamheden combineren?
                Bespreek vooraf wat er nodig is.
              </p>
              <Link className="button button--primary" href="/contact">
                Bespreek je klus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail__content">
        <div className="container service-detail__grid">
          <div>
            <p className="eyebrow">Werkzaamheden</p>
            <h2>Wat GuusCo kan doen</h2>
            <p>{service.description}</p>
          </div>

          <div className="service-detail__examples">
            <h2>Voorbeelden</h2>
            <ul>
              {service.examples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-detail__related">
        <div className="container">
          <div className="service-detail__related-heading">
            <div>
              <p className="eyebrow">Ook mogelijk</p>
              <h2>Werkzaamheden combineren</h2>
            </div>
            <Link className="text-link" href="/diensten">
              Alle diensten bekijken
            </Link>
          </div>

          <div className="service-detail__related-grid">
            {relatedServices.map((item) => (
              <Link
                className="service-detail__related-card"
                href={`/diensten/${item.slug}`}
                key={item.slug}
              >
                <div aria-hidden="true">
                  <ServiceIcon slug={item.slug} />
                </div>
                <span>{item.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail__cta">
        <div className="container service-detail__cta-inner">
          <div>
            <p className="eyebrow">Een klus in gedachten?</p>
            <h2>Vertel wat er moet gebeuren.</h2>
          </div>
          <div>
            <p>
              GuusCo werkt in Nijmegen en circa 20 kilometer daaromheen voor
              kleine en middelgrote klussen.
            </p>
            <Link className="button button--primary" href="/contact">
              Klus aanmelden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
