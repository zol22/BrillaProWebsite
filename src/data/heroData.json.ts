export interface HeroDataProps {
	title: String;
	description: string;
	CTA: string; // defaults to false. Set to true to enable some Astro 3.0 view transitions
}

// Update this file with your site specific information
const heroData: HeroDataProps = {
	title: "Hero Tite",
	description:
		"Hero Description",
	CTA: "CTA",
};

export default heroData;
