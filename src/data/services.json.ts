import image1 from "@assets/images/hero2.jpg";
import carDetailing from "@assets/images/carDetailing.png"
import pressurewashing from "@assets/images/pressurewashing.png"

export interface ServiceItem {
	name: string;
	featured?: boolean;
	price: number;
	monthly?: number;
	features: string[];
	image: ImageMetadata;
}

export interface AddonItem {
	name: string;
	description: string;
	price: number;
	recurring?: "monthly" | "yearly" | "one-time";
    required: boolean
	image?: ImageMetadata;
}

// 🌞 MAIN PACKAGES
export const services: ServiceItem[] = [
	{
		name: "Car Detailing",
        featured: false,
		price: 300,
		features: [
			"Up to 5 Pages (Home, About, Services, Work, Contact)",
			"SEO & Website Optimization",
			"Help Getting Listed on Google",
			"Contact Form Setup + Google Maps Embed",
		
		],
		image: carDetailing,
	},
    {
		name: "Pressure Washing",
        featured: false,
		price: 300,
		features: [
			"Up to 5 Pages (Home, About, Services, Work, Contact)",
			"SEO & Website Optimization",
			"Help Getting Listed on Google",
			"Contact Form Setup + Google Maps Embed",
			"Beautiful Landing Page with Clear CTA",
			
		],
		image: pressurewashing,
	},
    {
		name: "Pressure Washing",
        featured: false,
		price: 300,
		features: [
			"Up to 5 Pages (Home, About, Services, Work, Contact)",
			"SEO & Website Optimization",
			"Help Getting Listed on Google",
			"Contact Form Setup + Google Maps Embed",
			"Beautiful Landing Page with Clear CTA",
			
		],
		image: pressurewashing,
	},
    {
		name: "Pressure Washing",
        featured: false,
		price: 300,
		features: [
			"Up to 5 Pages (Home, About, Services, Work, Contact)",
			"SEO & Website Optimization",
			"Help Getting Listed on Google",
			"Contact Form Setup + Google Maps Embed",
			"Beautiful Landing Page with Clear CTA",
			
		],
		image: pressurewashing,
	},

];

// 🌙 ADD-ONS
export const addons: AddonItem[] = [
	{
		name: "Name",
		description: "Yearly management and renewal of your domain name.",
		price: 20,
		recurring: "yearly",
        required: true,
	},
	{
		name: "Name",
		description: "Includes website hosting configuration and support.",
		price: 20,
        required: true,
		recurring: "monthly",
	}
]

