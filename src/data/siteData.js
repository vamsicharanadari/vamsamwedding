// TODO: Replace names/date with real wedding details before sharing publicly.
export const couple = {
  bride: 'Meera Sharma',
  groom: 'Arjun Rao',
  weddingDate: 'February 14, 2027',
  heroImage:
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80',
  welcomeMessage:
    'We are thrilled to celebrate our wedding with our closest friends and family. Join us for three unforgettable days of rituals, music, food, and joy.'
};

// TODO: Update dates, venue addresses, and dress codes.
export const events = [
  {
    id: 'mehendi',
    name: 'Mehendi & High Tea',
    date: 'February 12, 2027',
    time: '4:00 PM - 8:00 PM',
    venue: 'Royal Courtyard, Jaipur',
    mapLink: 'https://maps.google.com',
    dressCode: 'Floral Festive',
    description:
      'Celebrate with henna artists, folk music, and signature Rajasthani bites in a garden setting.'
  },
  {
    id: 'sangeet',
    name: 'Sangeet Night',
    date: 'February 13, 2027',
    time: '7:00 PM - 11:00 PM',
    venue: 'Amber Ballroom, Jaipur',
    mapLink: 'https://maps.google.com',
    dressCode: 'Glam Ethnic',
    description:
      'An evening of dance performances, family stories, and a live DJ to celebrate both families coming together.'
  },
  {
    id: 'wedding',
    name: 'Wedding Ceremony & Reception',
    date: 'February 14, 2027',
    time: '5:30 PM onward',
    venue: 'Lotus Palace Lawns, Jaipur',
    mapLink: 'https://maps.google.com',
    dressCode: 'Traditional Elegance',
    description:
      'Join us for varmala, pheras under the stars, and a grand dinner reception with curated regional cuisine.'
  }
];

// TODO: Replace with your real wedding photos grouped by event IDs.
export const galleryImages = [
  {
    id: 1,
    eventId: 'mehendi',
    alt: 'Mehendi celebration decor',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    eventId: 'mehendi',
    alt: 'Bride hand mehendi closeup',
    url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    eventId: 'sangeet',
    alt: 'Sangeet dance stage lights',
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    eventId: 'sangeet',
    alt: 'Family dance rehearsal',
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    eventId: 'wedding',
    alt: 'Mandap floral arrangements',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    eventId: 'wedding',
    alt: 'Couple portrait in traditional attire',
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  }
];

export const travelInfo = {
  hotels: [
    {
      name: 'The Royal Residency',
      distance: '1.2 km from wedding venue',
      priceRange: '$$$ • Premium',
      link: 'https://example.com/hotel-1'
    },
    {
      name: 'Ivory Boutique Stay',
      distance: '2.0 km from wedding venue',
      priceRange: '$$ • Mid-range',
      link: 'https://example.com/hotel-2'
    },
    {
      name: 'Heritage Comfort Inn',
      distance: '3.5 km from wedding venue',
      priceRange: '$ • Value',
      link: 'https://example.com/hotel-3'
    }
  ],
  transport: [
    'Airport transfer vans will run every 90 minutes on February 12 and 13.',
    'Dedicated shuttle buses will be available between partner hotels and event venues.',
    'Cab aggregators and local taxis are available 24/7 in Jaipur city.'
  ],
  faq: [
    {
      question: 'What is the weather in Jaipur during February?',
      answer: 'Expect pleasant evenings around 55°F to 68°F. Carry a light shawl for late-night events.'
    },
    {
      question: 'Are children invited to all events?',
      answer: 'Yes, all events are family-friendly and include dedicated children activity corners.'
    },
    {
      question: 'Can I attend only selected events?',
      answer: 'Absolutely. Please mark your attendance in RSVP communication for each event separately.'
    }
  ]
};

export const contacts = {
  family: [
    {
      role: 'Bride Family - Hospitality',
      name: 'Nisha Sharma',
      phone: '+1 (555) 123-4567'
    },
    {
      role: 'Groom Family - Logistics',
      name: 'Raghav Rao',
      phone: '+1 (555) 987-6543'
    }
  ],
  coordinator: {
    name: 'Ananya Events Team',
    phone: '+1 (555) 102-2020',
    email: 'weddinghelp@example.com'
  }
};
