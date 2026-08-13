import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Diensten" };

export default function ServicesPage() {
  return <main className="services-page"><section className="services-page__hero"><div className="container"><p className="eyebrow">Diensten</p><h1>Meerdere disciplines, één aanspreekpunt.</h1></div></section><section className="services-page__overview"><div className="container services-list">{services.map((service) => <article className="services-list__item" key={service.slug}><div><h2>{service.title}</h2><p>{service.intro}</p></div><Link className="text-link" href={`/diensten/${service.slug}`}>Bekijk dienst</Link></article>)}</div></section></main>;
}
