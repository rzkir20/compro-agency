type CaseStudy = {
  industry: string;
  outcomeLabel: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type PortfolioData = {
  portfolio: {
    caseStudies: CaseStudy[];
  };
};
