export interface HeroDataProps {
	title: String;
	description: string;
	CTA: string; // defaults to false. Set to true to enable some Astro 3.0 view transitions
}

// Update this file with your site specific information
const heroData: HeroDataProps = {
	title: "Powerful. Precise. Professional.",
	description:
		"Professional Auto Mobile Cleaning & Pressure Washing  in Orlando",
	CTA: "Get A Free Quote",
};

export default heroData;
