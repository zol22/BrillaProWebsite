import image1 from "@assets/images/hero2.jpg";

export interface PackageItem {
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
export const packages: PackageItem[] = [
	{
		name: "Name",
        featured: false,
		price: 300,
		features: [
			"Up to 5 Pages (Home, About, Services, Work, Contact)",
			"SEO & Website Optimization",
			"Help Getting Listed on Google",
			"Contact Form Setup + Google Maps Embed",
			"Beautiful Landing Page with Clear CTA",
			"Improved User Experience (UX)",
			"User Behavior Analysis",
			"Reduce Bounce Rate & Boost Conversions"
		],
		image: image1,
	}
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

