interface PortfolioDetails {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  location: string;
  available: boolean;
}

export const portfolioDetails: PortfolioDetails = {
  name: "Ali Benrami",
  title: "Software Developer",
  description: "Building thoughtful software with attention to detail.",
  email: "ali@example.com",
  github: "https://github.com/AliBenrami",
  location: "San Francisco, CA",
  available: true,
};
