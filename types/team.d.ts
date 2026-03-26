type Leader = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: string;
  badges: string[];
};

type Specialist = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  tags: Array<{
    label: string;
    bgTextClassName: string;
  }>;
};

type TeamData = {
  team: {
    leaders: Leader[];
    specialists: Specialist[];
  };
};
