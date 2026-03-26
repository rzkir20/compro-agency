type OverviewHighlightIcon = "trendingUp" | "shield";

type OverviewHighlight = {
  icon: OverviewHighlightIcon;
  title: string;
  description: string;
};

type OverviewData = {
  paragraphs: string[];
  highlights: OverviewHighlight[];
  deliverables: string[];
};

type PackageFeature = {
  text: string;
  included: boolean;
};

type EngagementPackage = {
  id: string;
  name: string;
  description: string;
  priceMain: string;
  priceSuffix: string;
  isFeatured: boolean;
  badgeText: string;
  features: PackageFeature[];
  ctaLabel: string;
};

type ServicesData = {
  services: {
    overview: OverviewData;
    engagementPackages: {
      heading: string;
      items: EngagementPackage[];
    };
  };
};
