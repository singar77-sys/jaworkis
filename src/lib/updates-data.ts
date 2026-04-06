export interface ShopUpdate {
  id: string;
  text: string;
  /** Optional image URL from the post */
  image?: string;
  /** Display date */
  date: string;
  /** ISO date for sorting */
  isoDate: string;
}

/**
 * Shop updates feed — sourced from Facebook posts.
 *
 * INTEGRATION OPTIONS (pick one when ready):
 * 1. Facebook Graph API via Next.js API route:
 *    GET /api/updates → fetches from graph.facebook.com/{page-id}/posts
 *    Requires: FB App ID, Page Access Token (long-lived)
 *    Revalidate every 30 minutes via ISR
 *
 * 2. Sanity CMS webhook:
 *    Zapier/Make watches FB page → creates Sanity document → ISR revalidates
 *    Zero API maintenance, Mark never touches code
 *
 * 3. Manual (current):
 *    Paste recent posts here. Update weekly.
 */
export const shopUpdates: ShopUpdate[] = [
  {
    id: "1",
    text: "Fresh kielbasa just came out of the smoker. Get it while it's hot — literally. We're here until 6.",
    date: "Today",
    isoDate: "2026-04-04",
  },
  {
    id: "2",
    text: "Party tray season is here. Graduation orders are filling up fast. Call ahead so we can get you squared away.",
    image: "/images/deli-tray-round.webp",
    date: "Yesterday",
    isoDate: "2026-04-03",
  },
  {
    id: "3",
    text: "Mushroom barley soup today. Made from scratch this morning. Cup or bowl, your call.",
    date: "Tuesday",
    isoDate: "2026-04-01",
  },
  {
    id: "4",
    text: "New York strips looking real nice today. Thick cut, well marbled. Come see for yourself.",
    date: "Last Saturday",
    isoDate: "2026-03-28",
  },
  {
    id: "5",
    text: "Thank you to everyone who came out for Easter. We went through over 800 pounds of kielbasa this week. You people are serious.",
    date: "Last week",
    isoDate: "2026-03-24",
  },
];
