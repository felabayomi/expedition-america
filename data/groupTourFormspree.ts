export const GROUP_TOUR_FORMSPREE_ENDPOINTS = {
  austin: "https://formspree.io/f/mvzwlqqv",
  chicago: "https://formspree.io/f/mwvradvy",
  cumberland: "https://formspree.io/f/xojkrloe",
  losAngeles: "https://formspree.io/f/mojkrlew",
  miami: "https://formspree.io/f/xreyjzkg",
  morgantown: "https://formspree.io/f/mreyjaba",
  nashville: "https://formspree.io/f/xnjgwzww",
  nyc: "https://formspree.io/f/mzdjyqkj",
} as const;

export type GroupTourCityKey = keyof typeof GROUP_TOUR_FORMSPREE_ENDPOINTS;

export function getGroupTourFormspreeEndpoint(city: GroupTourCityKey): string {
  return GROUP_TOUR_FORMSPREE_ENDPOINTS[city];
}