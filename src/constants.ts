export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Flat' | 'Apartment' | 'Villa' | 'Commercial' | 'Plot' | 'Project';
  category: 'Buy' | 'Rent';
  configuration: string;
  size: string;
  status: 'Ready to Move' | 'Under Construction';
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  featured?: boolean;
  reraId?: string;
  possessionDate?: string;
  furnishing?: string;
  parking?: string;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Skyline Apartment',
    location: 'Sector 36, Kharghar',
    price: '₹1.85 Cr',
    type: 'Apartment',
    category: 'Buy',
    configuration: '3 BHK',
    size: '1650 sq.ft',
    status: 'Ready to Move',
    image: 'https://picsum.photos/seed/luxury1/800/600',
    images: [
      'https://picsum.photos/seed/luxury1/800/600',
      'https://picsum.photos/seed/luxury2/800/600',
      'https://picsum.photos/seed/luxury3/800/600'
    ],
    description: 'Experience unparalleled luxury in this spacious 3BHK apartment located in the heart of Kharghar. Featuring modern amenities and breathtaking views.',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', '24/7 Security', 'Power Backup'],
    featured: true,
    furnishing: 'Semi-furnished',
    parking: '2 Covered'
  },
  {
    id: '2',
    title: 'Modern Commercial Office Space',
    location: 'Sector 15, Panvel',
    price: '₹85,000/mo',
    type: 'Commercial',
    category: 'Rent',
    configuration: 'Office Space',
    size: '1200 sq.ft',
    status: 'Ready to Move',
    image: 'https://picsum.photos/seed/comm1/800/600',
    images: [
      'https://picsum.photos/seed/comm1/800/600',
      'https://picsum.photos/seed/comm2/800/600'
    ],
    description: 'Prime commercial office space available for rent in a high-traffic area of Panvel. Ideal for startups and established businesses.',
    amenities: ['High-speed Internet', 'Reception', 'Conference Room', 'AC'],
    featured: true
  },
  {
    id: '3',
    title: 'Serene 4BHK Garden Villa',
    location: 'New Panvel',
    price: '₹4.2 Cr',
    type: 'Villa',
    category: 'Buy',
    configuration: '4 BHK',
    size: '3200 sq.ft',
    status: 'Under Construction',
    image: 'https://picsum.photos/seed/villa1/800/600',
    images: [
      'https://picsum.photos/seed/villa1/800/600',
      'https://picsum.photos/seed/villa2/800/600'
    ],
    description: 'A masterpiece of architectural design, this 4BHK villa offers privacy and elegance with a private garden and premium finishes.',
    amenities: ['Private Garden', 'Home Theater', 'Smart Home Features', 'Private Pool'],
    featured: true,
    possessionDate: 'Dec 2026'
  },
  {
    id: '4',
    title: 'Premium 2BHK City View Flat',
    location: 'Sector 20, Kharghar',
    price: '₹1.15 Cr',
    type: 'Flat',
    category: 'Buy',
    configuration: '2 BHK',
    size: '1050 sq.ft',
    status: 'Ready to Move',
    image: 'https://picsum.photos/seed/flat1/800/600',
    images: [
      'https://picsum.photos/seed/flat1/800/600'
    ],
    description: 'Well-maintained 2BHK flat with excellent ventilation and natural light. Close to schools and railway station.',
    amenities: ['Children\'s Play Area', 'Jogging Track', 'Intercom'],
    featured: false
  },
  {
    id: '5',
    title: 'Residential Plot in Developing Zone',
    location: 'Taloja, Navi Mumbai',
    price: '₹45 Lakh',
    type: 'Plot',
    category: 'Buy',
    configuration: 'Plot',
    size: '1500 sq.ft',
    status: 'Ready to Move',
    image: 'https://picsum.photos/seed/plot1/800/600',
    images: [
      'https://picsum.photos/seed/plot1/800/600'
    ],
    description: 'Clear title residential plot in a rapidly developing area. High investment potential.',
    amenities: ['Gated Community', 'Water Supply', 'Electricity'],
    featured: false
  },
  {
    id: '6',
    title: 'Upcoming Luxury Project - The Crest',
    location: 'Sector 10, Kharghar',
    price: 'On Request',
    type: 'Project',
    category: 'Buy',
    configuration: '2, 3 BHK',
    size: 'Varies',
    status: 'Under Construction',
    image: 'https://picsum.photos/seed/project1/800/600',
    images: [
      'https://picsum.photos/seed/project1/800/600'
    ],
    description: 'Be a part of Kharghar\'s next landmark. The Crest offers ultra-modern living with world-class amenities.',
    amenities: ['Infinity Pool', 'Sky Lounge', 'Spa', 'Yoga Deck'],
    featured: true,
    reraId: 'P52000012345'
  }
];
