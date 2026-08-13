type ServiceIconProps = {
  slug: string;
};

export function ServiceIcon({ slug }: ServiceIconProps) {
  const common = {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (slug) {
    case "timmerwerk":
      return (
        <svg {...common}>
          <path d="M8 38 25 21m-9-9 5-5 14 14-5 5M17 11l5 5m3 5 5 5M7 39l-1-5 5 1" />
        </svg>
      );
    case "elektra":
      return (
        <svg {...common}>
          <path d="m27 4-14 22h11l-3 18 14-24H24l3-16Z" />
        </svg>
      );
    case "sanitair-afvoer":
      return (
        <svg {...common}>
          <path d="M8 19h20v7H8zm5-5h10m-5-4v4m11 8h7a6 6 0 0 1 6 6v4H28v-4m9 9c0 3-2 5-5 5s-5-2-5-5c0-2 5-7 5-7s5 5 5 7Z" />
        </svg>
      );
    case "tegelwerk":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="15" height="15" rx="2" />
          <rect x="27" y="6" width="15" height="15" rx="2" />
          <rect x="6" y="27" width="15" height="15" rx="2" />
          <rect x="27" y="27" width="15" height="15" rx="2" />
        </svg>
      );
    case "wanden-aftimmering":
      return (
        <svg {...common}>
          <rect x="7" y="6" width="34" height="36" rx="1" />
          <path d="M16 6v36M24 6v36M32 6v36" />
        </svg>
      );
    case "montage-reparatie":
      return (
        <svg {...common}>
          <path d="M29 7a10 10 0 0 0-10 13L7 32a6 6 0 0 0 9 9l12-12a10 10 0 0 0 13-10l-7 6-7-2-2-7 6-7c-1-.7-2-.9-2-.9Z" />
        </svg>
      );
    case "klusdag":
      return (
        <svg {...common}>
          <rect x="7" y="10" width="34" height="31" rx="3" />
          <path d="M15 6v8M33 6v8M7 19h34" />
        </svg>
      );
    default:
      return null;
  }
}
