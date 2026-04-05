export interface Review {
  name: string;
  text: string;
  rating: number;
  /** Approximate date for display, e.g. "2 months ago" */
  date: string;
}

/**
 * Curated selection from 500+ Google reviews.
 * Swap this for a Google Places API fetch or Sanity query when ready.
 */
export const googleReviews: Review[] = [
  {
    name: "Mike D.",
    text: "Best butcher shop in the Cleveland area, hands down. The kielbasa is unreal — my family has been coming here for three generations.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "Sarah K.",
    text: "The deli counter is a hidden gem. Roast beef sub is the best I've ever had. Mark and the crew are always friendly and helpful.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Tom R.",
    text: "Drove 45 minutes for the homemade kielbasa and it was worth every mile. They cut a perfect 2-inch ribeye for me on the spot. Old school done right.",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Jessica M.",
    text: "Ordered party trays for my graduation and everyone was asking where the food came from. The meat and cheese tray was gone in 20 minutes.",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Dave P.",
    text: "I've been coming here since I was a kid with my grandpa. Nothing has changed — same quality, same family, same incredible sausage. This place is a Cleveland institution.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Linda W.",
    text: "Their smokies are addictive. We buy 5 pounds every time. The staff always remembers your name.",
    rating: 5,
    date: "2 weeks ago",
  },
];

export const reviewSummary = {
  rating: 4.8,
  totalReviews: 500,
  googlePlaceId: "ChIJ_____jaworskimeats", // Replace with real Place ID
};
