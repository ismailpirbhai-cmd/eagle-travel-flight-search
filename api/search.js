// api/search.js

// This handles flight search requests

const mockFlights = [

  {

    id: 1,

    airline: 'Pakistan International Airlines',

    code: 'PK',

    departure: '08:30',

    arrival: '14:50',

    duration: '6h 20m',

    stops: 0,

    price: 520,

    rating: 4.2,

    baggage: '23kg',

    seat: 'Economy'

  },

  {

    id: 2,

    airline: 'British Airways',

    code: 'BA',

    departure: '11:15',

    arrival: '18:45',

    duration: '7h 30m',

    stops: 1,

    price: 640,

    rating: 4.5,

    baggage: '23kg',

    seat: 'Economy'

  },

  {

    id: 3,

    airline: 'Emirates',

    code: 'EK',

    departure: '14:00',

    arrival: '20:30',

    duration: '6h 30m',

    stops: 0,

    price: 780,

    rating: 4.7,

    baggage: '23kg + personal',

    seat: 'Economy'

  },

  {

    id: 4,

    airline: 'Turkish Airlines',

    code: 'TK',

    departure: '22:45',

    arrival: '06:15+1',

    duration: '7h 30m',

    stops: 1,

    price: 450,

    rating: 4.1,

    baggage: '23kg',

    seat: 'Economy'

  },

  {

    id: 5,

    airline: 'Lufthansa',

    code: 'LH',

    departure: '09:00',

    arrival: '16:20',

    duration: '7h 20m',

    stops: 1,

    price: 690,

    rating: 4.3,

    baggage: '23kg',

    seat: 'Economy'

  }

];

export default function handler(req, res) {

  if (req.method !== 'POST') {

    return res.status(405).json({ error: 'Method not allowed' });

  }

  try {

    const { from, to, departDate, returnDate, passengers } = req.body;

    if (!from || !to || !departDate) {

      return res.status(400).json({ error: 'Missing required fields' });

    }

    console.log(`Search: ${from} → ${to} on ${departDate}`);

    // TODO: Replace mockFlights with real FlightAPI call

    // For now, returning mock data so you can test the UI

    res.json({

      success: true,

      data: mockFlights,

      message: 'Ready for real FlightAPI integration'

    });

  } catch (error) {

    res.status(500).json({ error: 'Search failed', message: error.message });

  }

}

File 2: vercel.json

{

  "version": 2,

  "builds": [

    { "src": "api/**/*.js", "use": "@vercel/node" }

  ]

}

File 3: package.json

{

  "name": "eagle-travel-flight-search",

  "version": "1.0.0",

  "description": "Flight search backend for Eagle Travel"

}
