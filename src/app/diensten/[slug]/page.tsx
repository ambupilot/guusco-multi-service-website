import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: `${service.intro} GuusCo Multiservice in Nijmegen en omgeving.` };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <main className="service-detail"><section className="service-detail__hero"><div className="container service-detail__hero-inner"><div><p className="eyebrow">Diensten</p><h1>{service.title}</h1><p className="service-detail__intro">{service.intro}</p></div><Link className="button button--primary" href="/contact">Bespreek je klus</Link></div></section><section className="service-detail__content"><div className="container service-detail__grid"><div><h2>Wat GuusCo kan doen</h2><p>{service.description}</p></div><div><h2>Voorbeelden</h2><ul>{service.examples.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section></main>;
}
