export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Brilla Pro Solutions",
	// Your website's title and description (meta fields)
	title: "Brilla Pro Solutions | Mobile Car Detailing & Pressure Washing in Orlando, FL",
	description:
		"Brilla Pro Solutions offers expert mobile car detailing, pressure washing, curbside cleanup, and carpet & upholstery cleaning in Orlando and surrounding areas. We bring professional results to your driveway with flexible scheduling and honest service.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Aldair Ormeno",
		email: "info@brillapro.com",
		twitter: "brillaprosolutions",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "logo", // Change this
		alt: "Brilla Pro Solutions Logo",
	},
};

export default siteData;
