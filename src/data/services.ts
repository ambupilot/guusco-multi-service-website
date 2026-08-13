export type Service = {
  slug: string;
  title: string;
  intro: string;
  description: string;
  examples: string[];
};

export const services: Service[] = [
  {
    slug: "timmerwerk",
    title: "Timmerwerk",
    intro: "Net timmerwerk voor aanpassingen, herstel en afwerking in en rond de woning.",
    description:
      "Van aftimmeringen en plinten tot herstelwerk en kleine maatwerkoplossingen. GuusCo richt zich op overzichtelijke timmerklussen die netjes en praktisch uitgevoerd kunnen worden.",
    examples: ["Aftimmeringen", "Plinten en lijstwerk", "Herstel van houtwerk", "Kleine maatwerkoplossingen"],
  },
  {
    slug: "elektra",
    title: "Elektra",
    intro: "Kleine elektrische werkzaamheden, uitbreidingen en montage in huis.",
    description:
      "Voor praktische elektraklussen zoals verlichting, schakelmateriaal en kleine uitbreidingen. Werkzaamheden worden alleen uitgevoerd wanneer ze binnen de passende scope en geldende veiligheidsregels vallen.",
    examples: ["Verlichting monteren", "Schakelaars en wandcontactdozen", "Kleine uitbreidingen", "Storingen en herstelwerk"],
  },
  {
    slug: "sanitair-afvoer",
    title: "Sanitair & afvoer",
    intro: "Montage, vervanging en kleine aanpassingen aan sanitair en afvoer.",
    description:
      "Geschikt voor kleine sanitaire werkzaamheden waarbij geen groot installatietraject nodig is. Denk aan vervangen, aansluiten, herstellen en praktisch aanpassen.",
    examples: ["Kranen vervangen", "Sanitair monteren", "Afvoer aanpassen", "Kleine lekkages herstellen"],
  },
  {
    slug: "tegelwerk",
    title: "Tegelwerk",
    intro: "Klein tegelwerk en herstel voor keuken, toilet en andere compacte ruimtes.",
    description:
      "Geen grote tegelprojecten, wel zorgvuldig uitgevoerd klein tegelwerk, herstel en afwerking waar een nette oplossing nodig is.",
    examples: ["Keukenachterwand", "Klein wandtegelwerk", "Beschadigde tegels vervangen", "Voeg- en herstelwerk"],
  },
  {
    slug: "wanden-aftimmering",
    title: "Wanden & aftimmering",
    intro: "Gips- en gasbetonwanden, omkastingen en praktische aftimmeringen.",
    description:
      "Voor het opdelen, dichtzetten of netjes afwerken van ruimtes met lichte wanden en aftimmeringen. Gericht op compacte verbouwingen en functionele aanpassingen.",
    examples: ["Gipswanden", "Gasbetonwanden", "Omkastingen", "Aftimmeren van sparingen en leidingen"],
  },
  {
    slug: "montage-reparatie",
    title: "Montage & reparatie",
    intro: "Montage en herstel van onderdelen in en rond de woning.",
    description:
      "Voor klussen die blijven liggen omdat ze te klein zijn voor een aannemer, maar wel degelijk goed uitgevoerd moeten worden.",
    examples: ["Meubels en wandmontage", "Deurbeslag", "Kleine reparaties", "Herstel en afstelling"],
  },
  {
    slug: "klusdag",
    title: "Klusdag",
    intro: "Meerdere kleinere klussen slim combineren in één afspraak.",
    description:
      "Een klusdag is bedoeld voor een lijst met verschillende kleine werkzaamheden. Zo hoeven losse klussen niet verspreid over meerdere afspraken uitgevoerd te worden.",
    examples: ["Combinatie van montage en reparatie", "Kleine elektra- en timmerklussen", "Onderhoudslijst afwerken", "Praktische woningverbeteringen"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
