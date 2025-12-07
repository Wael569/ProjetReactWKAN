// src/compos/hotelsData.js

export const HOTELS_BY_CITY = {
  tunis: [
    {
      id: "tunisia-palace",
      name: "Tunisia Palace Hotel",
      rating: 4.5,
      price: "€85 / night",
      priceValue: 85,
      currency: "€",
      image: "/tunis-hotel-1.jpg",
      location: "Tunis city center, Avenue Habib Bourguiba",
      description:
        "A charming hotel located in the heart of downtown Tunis, close to cafés, shops and the historic medina.",
    },
    {
      id: "golden-tulip-mechtel",
      name: "Golden Tulip El Mechtel",
      rating: 4.2,
      price: "€92 / night",
      priceValue: 92,
      currency: "€",
      image: "/tunis-hotel-2.jpg",
      location: "Near Belvédère Park, Tunis",
      description:
        "Modern rooms with city views, a relaxing pool area and easy access to major business districts.",
    },
    {
      id: "carlton-tunis",
      name: "Hotel Carlton Tunis",
      rating: 4.0,
      price: "€70 / night",
      priceValue: 70,
      currency: "€",
      image: "/tunis-hotel-3.jpg",
      location: "Avenue Habib Bourguiba, Tunis",
      description:
        "A popular choice for city breaks with comfortable rooms and a great central location.",
    },
  ],
  sousse: [
    {
      id: "movenpick-sousse",
      name: "Mövenpick Resort & Marine Spa",
      rating: 4.6,
      price: "€110 / night",
      priceValue: 110,
      currency: "€",
      image: "/sousse-hotel-1.jpeg",
      location: "Sousse beachfront",
      description:
        "Luxury resort with private beach access, marine spa and several on-site restaurants.",
    },
    {
      id: "marhaba-beach",
      name: "Marhaba Beach Hotel",
      rating: 4.3,
      price: "€95 / night",
      priceValue: 95,
      currency: "€",
      image: "/sousse-hotel-2.jpeg",
      location: "Tourist area, Sousse",
      description:
        "Family-friendly hotel with pools, activities and direct access to the sandy beach.",
    },
    {
      id: "sousse-palace",
      name: "Sousse Palace Hotel & Spa",
      rating: 4.1,
      price: "€88 / night",
      priceValue: 88,
      currency: "€",
      image: "/sousse-hotel-3.jpg",
      location: "Sousse city and seafront",
      description:
        "Elegant stay combining proximity to the medina and a relaxing beach atmosphere.",
    },
  ],
  hammamet: [
    {
      id: "russelior",
      name: "The Russelior Hotel & Spa",
      rating: 4.7,
      price: "€130 / night",
      priceValue: 130,
      currency: "€",
      image: "/hammamet-hotel-1.jpeg",
      location: "Yasmine Hammamet",
      description:
        "High-end spa hotel surrounded by gardens, ideal for a relaxing getaway by the sea.",
    },
    {
      id: "medina-solaria",
      name: "Medina Solaria & Thalasso",
      rating: 4.4,
      price: "€105 / night",
      priceValue: 105,
      currency: "€",
      image: "/hammamet-hotel-2.jpg",
      location: "Yasmine Hammamet",
      description:
        "Resort offering thalasso treatments, pools and direct access to the sandy beach.",
    },
    {
      id: "bel-azur",
      name: "Hotel Bel Azur Thalasso & Bungalows",
      rating: 4.2,
      price: "€90 / night",
      priceValue: 90,
      currency: "€",
      image: "/hammamet-hotel-3.jpg",
      location: "Hammamet seafront",
      description:
        "Bungalows and rooms with sea views, perfect for families and couples.",
    },
  ],
  "la-marsa": [
    {
      id: "movenpick-gammarth",
      name: "Mövenpick Hotel Gammarth",
      rating: 4.6,
      price: "€140 / night",
      priceValue: 140,
      currency: "€",
      image: "/la-marsa-hotel-1.jpg",
      location: "Gammarth, near La Marsa",
      description:
        "Upscale beachfront hotel with stunning views of the Mediterranean and Carthage.",
    },
    {
      id: "golden-carthage",
      name: "Golden Carthage Hotel Tunis",
      rating: 4.3,
      price: "€115 / night",
      priceValue: 115,
      currency: "€",
      image: "/la-marsa-hotel-2.jpg",
      location: "Gammarth hill, overlooking the bay",
      description:
        "Spacious hotel with pools, greenery and good access to La Marsa and Carthage.",
    },
    {
      id: "dar-el-marsa",
      name: "Dar El Marsa",
      rating: 4.5,
      price: "€120 / night",
      priceValue: 120,
      currency: "€",
      image: "/la-marsa-hotel-3.jpg",
      location: "La Marsa Corniche",
      description:
        "Stylish boutique hotel right on the corniche, close to cafés and the beach.",
    },
  ],
};

export function getHotelByCityAndId(citySlug, hotelId) {
  const cityKey = citySlug?.toLowerCase();
  const list = HOTELS_BY_CITY[cityKey] || [];
  return list.find((h) => h.id === hotelId);
}
