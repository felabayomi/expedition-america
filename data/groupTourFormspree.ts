export const GROUP_TOUR_FORMSPREE_ENDPOINTS = {
  chicago: "https://formspree.io/f/mwvradvy",
  miami: "https://formspree.io/f/xreyjzkg",
  nyc: "https://formspree.io/f/mzdjyqkj",
} as const;

export type GroupTourCityKey = keyof typeof GROUP_TOUR_FORMSPREE_ENDPOINTS;

export function getGroupTourFormspreeEndpoint(city: GroupTourCityKey): string {
  return GROUP_TOUR_FORMSPREE_ENDPOINTS[city];
}