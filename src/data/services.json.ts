import carDetailing from "@assets/images/carDetailing.png";
import pressurewashing from "@assets/images/pressurewashing.png";

export interface ServiceItem {
  name: string;
  featured: boolean;
  carPrice: number;
  colorClass?: string ;
  truckPrice: number;
  features: string[];
  image: ImageMetadata;
}

export interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    category: "Car Detailing Packages",
    services: [
      {
        name: "Bronze Package (Exterior Wash)",
        featured: false,
        carPrice: 75,
        truckPrice: 100,
		colorClass: "bg-[#B87333]",
        features: [
          "Hand Wash & Dry",
          "Rims & Tires Cleaned and Dressed",
          "Windows Cleaned",
          "Spray Wax",
          "Interior Mats and Seats Vacuumed",
          "Dashboard and Console Wiped Down"
        ],
        image: carDetailing
      },
      {
        name: "Silver Package (Interior & Exterior)",
        featured: false,
        carPrice: 100,
        truckPrice: 140,
		colorClass: "bg-[#BFC9CA]",
        features: [
          "Interior Carpets and Mats Shampooed",
          "Air Vents Cleaned",
          "Seats Shampooed",
          "Leather Seats, Dash, and Console Cleaned & Conditioned",
          "Trunk Vacuumed and Shampooed",
          "Windows Cleaned",
          "Exterior Car Wash Included"
        ],
        image: carDetailing
      },
      {
        name: "Gold Package (Deep Clean & Protection)",
        featured: false,
        carPrice: 200,
        truckPrice: 250,
		colorClass:"bg-[#D4AF37]",
        features: [
          "Everything in the Silver Package",
          "Clay Bar Treatment (Removes Surface Contaminants)",
          "Hand Wax (3–6 Months Protection)",
          "Leather Conditioning (If Applicable)",
          "Plastic Trim Restoration",
          "Seat Stain Removal",
          "Tire Dressing"
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
        carPrice: 50,
        truckPrice: 70,
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
        carPrice: 40,
        truckPrice: 60,
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
        carPrice: 40,
        truckPrice: 60,
        features: [
          "Stone, concrete, or tile patios",
          "Ideal for decks, porches, small surfaces",
          "Flat rate or per sq. ft. quote"
        ],
        image: pressurewashing
      }
    ]
  }
];
