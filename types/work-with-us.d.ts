type JobOpening = {
  id: string;
  category: string;
  categoryColor: string;
  details: string;
  title: string;
  description: string;
};

type JourneyStep = {
  step: string;
  title: string;
  description: string;
};

type BenefitIcon = "stethoscope" | "graduationCap" | "coffee" | "chartBar";

type BenefitItem = {
  icon: BenefitIcon;
  title: string;
  description: string;
};

type WorkWithUsData = {
  workWithUs: {
    openings: JobOpening[];
    journey: JourneyStep[];
    benefits: BenefitItem[];
  };
};
