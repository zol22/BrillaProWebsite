import carDetailing from "@assets/images/carDetailing.png"
import pressurewashing from "@assets/images/pressurewashing.png"

// types.ts
export interface ServiceItem {
	name: string;
	featured: boolean;
	price: number;
	features: string[];
	image: ImageMetadata; // If you use Astro image import, adjust type accordingly
  }
  
  export interface ServiceCategory {
	category: string;
	services: ServiceItem[];
  }
  

  export const services: ServiceCategory[] = [
	{
	  category: "Car Services",
	  services: [
		{
		  name: "Car Detailing",
		  featured: false,
		  price: 60,
		  features: [
			"Exterior wash, wax, and polish",
			"Interior vacuuming and deep shampoo",
			"Leather seat conditioning",
			"Dashboard, console, and trim cleaning"
		  ],
		  image: carDetailing
		},
		{
			name: "Mobile Car Wash",
			featured: false,
			price: 40,
			features: [
			  "Exterior hand wash and rinse",
			  "Quick interior wipe and vacuum",
			  "On-site service at your home or office",
			  "No mess, water-efficient process"
			],
			image: carDetailing
		  }
	  ]
	},
	{
	  category: "Pressure Washing",
	  services: [
		{
		  name: "Driveway & Sidewalk Cleaning",
		  featured: false,
		  price: 50,
		  features: [
			"Stain, dirt, and oil removal",
			"Cleans concrete, pavers, or asphalt",
			"Safe for all types of flat surfaces"
		  ],
		  image: pressurewashing
		},
		{
			name: "Fence Cleaning",
			featured: false,
			price: 40,
			features: [
			  "Removes mildew, dirt, and discoloration",
			  "Works for wood, vinyl, and metal fences",
			  "Restores curb appeal with gentle pressure"
			],
			image: pressurewashing
		  },
		  {
			name: "Patios & Small Areas",
			featured: false,
			price: 40,
			features: [
			  "Stone, concrete, or tile patios",
			  "deal for decks, porches, small surfaces",
			  "Flat rate or per sq. ft. quote"
			],
			image: pressurewashing
		  }
	  ]
	}
  ];
