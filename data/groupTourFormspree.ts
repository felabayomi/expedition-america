export const GROUP_TOUR_FORMSPREE_ENDPOINTS = {
  austin: "https://formspree.io/f/mvzwlqqv",
  chicago: "https://formspree.io/f/mwvradvy",
  losAngeles: "https://formspree.io/f/mojkrlew",
  miami: "https://formspree.io/f/xreyjzkg",
  nashville: "https://formspree.io/f/xnjgwzww",
  nyc: "https://formspree.io/f/mzdjyqkj",
} as const;

export type GroupTourCityKey = keyof typeof GROUP_TOUR_FORMSPREE_ENDPOINTS;

export function getGroupTourFormspreeEndpoint(city: GroupTourCityKey): string {
  return GROUP_TOUR_FORMSPREE_ENDPOINTS[city];
}