export type CityProfile = {
  name: string;
  region: string;
  vibe: string;
  highlights: string[];
  image: string;
  experience: {
    signature: string;
    bestFor: string;
    whenToGo: string;
    picks: string[];
  };
};

export const cityProfiles: CityProfile[] = [
  {
    name: "New York City",
    region: "New York",
    vibe: "Skyline energy, iconic neighborhoods, all-day culture.",
    highlights: ["Broadway + museums", "Rooftop views", "Global food"],
    image:
      "https://mediahost.app/api/media/serve/9e299a0c06586017049de94298aca9c8?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "A nonstop city rhythm with skyline views and neighborhood personality.",
      bestFor: "Culture lovers, first-time U.S. visitors, city weekends",
      whenToGo: "April-June or September-November",
      picks: ["Broadway night", "Chelsea + High Line walk", "Brooklyn food crawl"],
    },
  },
  {
    name: "Chicago",
    region: "Illinois",
    vibe: "Lakefront architecture, neighborhoods, and legendary music.",
    highlights: ["Riverwalk", "Art + architecture", "Deep-dish and beyond"],
    image:
      "https://mediahost.app/api/media/serve/724f5fd545aa4192d0a7daeb6702cd4b?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "Big-city architecture, lake views, and an easy neighborhood flow.",
      bestFor: "Food-focused travelers, architecture fans, long weekends",
      whenToGo: "May-October",
      picks: ["River architecture cruise", "West Loop dining", "Museum Campus day"],
    },
  },
  {
    name: "Miami",
    region: "Florida",
    vibe: "Beachfront luxury, nightlife, and coastal art scenes.",
    highlights: ["South Beach", "Art Deco", "Latin-inspired dining"],
    image:
      "https://mediahost.app/api/media/serve/2c9188045dd02cf3e6ee1f82a13d430d?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "Beachfront glamour mixed with vibrant nightlife and art energy.",
      bestFor: "Beach escapes, nightlife, luxury stays",
      whenToGo: "November-April",
      picks: ["South Beach sunrise", "Wynwood murals", "Little Havana evening"],
    },
  },
  {
    name: "Los Angeles",
    region: "California",
    vibe: "Coastal sunshine, creative districts, and iconic views.",
    highlights: ["Beach + city balance", "Studios + design", "Food neighborhoods"],
    image:
      "https://mediahost.app/api/media/serve/ec2141f74c0deb143ae805870ed8b76a?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "Creative districts, golden-hour coastlines, and iconic city scenes.",
      bestFor: "Creative travelers, road trips, mixed city + beach stays",
      whenToGo: "March-May or September-November",
      picks: ["Santa Monica coastline", "Arts District afternoon", "Hollywood view points"],
    },
  },
  {
    name: "Austin",
    region: "Texas",
    vibe: "Live music capital with creative local flavor.",
    highlights: ["Music venues", "Tacos + coffee", "Outdoor trails"],
    image:
      "https://mediahost.app/api/media/serve/88c385abd6bb06057665592faf9040c0?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "Music-heavy nightlife and laid-back daytime adventures.",
      bestFor: "Friend trips, music fans, casual city breaks",
      whenToGo: "March-May or October-November",
      picks: ["Live music crawl", "Lady Bird Lake trail", "Food truck tasting"],
    },
  },
  {
    name: "Nashville",
    region: "Tennessee",
    vibe: "Music-first city break with Southern character.",
    highlights: ["Honky-tonks", "Historic districts", "Chef-driven spots"],
    image:
      "https://mediahost.app/api/media/serve/bc393f73bf155047848fb16a6b1505eb?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "Music City moments with deep Southern food and nightlife.",
      bestFor: "Weekend groups, live-music travelers, bachelor/bachelorette trips",
      whenToGo: "April-June or September-November",
      picks: ["Broadway honky-tonks", "12 South brunch", "Country music history"],
    },
  },
  {
    name: "Cumberland",
    region: "Maryland",
    vibe: "Small-city mountain charm and historic downtown walks.",
    highlights: ["Scenic railways", "Main street shops", "Trail access"],
    image:
      "https://mediahost.app/api/media/serve/b8d6aefbb772dcb526e4524418064f58?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "Historic charm and scenic mountain pace for a relaxed reset.",
      bestFor: "Quiet getaways, road trippers, history lovers",
      whenToGo: "May-October",
      picks: ["Historic downtown stroll", "Scenic railway", "Trail-side cafes"],
    },
  },
  {
    name: "Morgantown",
    region: "West Virginia",
    vibe: "River views, college-town energy, and local events.",
    highlights: ["Waterfront strolls", "Game day atmosphere", "Casual eats"],
    image:
      "https://mediahost.app/api/media/serve/f6a3fcbb68bd45ce352c8df5974c8f7a?w=1200&h=800&fit=fill&q=80",
    experience: {
      signature: "Riverfront scenery with college-town life and local events.",
      bestFor: "Game-day travel, relaxed weekends, scenic drives",
      whenToGo: "April-October",
      picks: ["Waterfront walk", "Local breweries", "Campus district nightlife"],
    },
  },
  {
    name: "Seattle",
    region: "Washington",
    vibe: "Waterfront city life with mountain backdrops.",
    highlights: ["Coffee culture", "Market districts", "Nature day trips"],
    image:
      "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1200&q=80",
    experience: {
      signature: "Waterfront city breaks powered by coffee and mountain views.",
      bestFor: "Nature-meets-city travelers, couples, food + coffee enthusiasts",
      whenToGo: "June-September",
      picks: ["Pike Place morning", "Ferry rides", "Neighborhood coffee crawl"],
    },
  },
  {
    name: "Boston",
    region: "Massachusetts",
    vibe: "Historic streets, harbor views, and modern dining.",
    highlights: ["Freedom Trail", "Waterfront neighborhoods", "Classic seafood"],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    experience: {
      signature: "Historic routes and coastal neighborhoods with modern dining.",
      bestFor: "History lovers, fall trips, cultural city weekends",
      whenToGo: "May-June or September-October",
      picks: ["Freedom Trail route", "North End dinner", "Harbor sunset walk"],
    },
  },
  {
    name: "Atlanta",
    region: "Georgia",
    vibe: "Bold culture, nightlife, and city-weekend comfort.",
    highlights: ["Food halls", "Arts districts", "Nightlife"],
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    experience: {
      signature: "A bold city blend of food, arts, and weekend nightlife.",
      bestFor: "Weekend escapes, nightlife, culinary trips",
      whenToGo: "March-May or September-November",
      picks: ["BeltLine exploration", "Food hall hopping", "Midtown nightlife"],
    },
  },
  {
    name: "Las Vegas",
    region: "Nevada",
    vibe: "Entertainment capital with nonstop experiences.",
    highlights: ["Shows", "Resort dining", "Weekend escapes"],
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
    experience: {
      signature: "Entertainment-first experiences with resort luxury and late nights.",
      bestFor: "Celebration trips, nightlife, premium resort stays",
      whenToGo: "March-May or October-November",
      picks: ["Strip night tour", "Show + dinner", "Resort day pool scene"],
    },
  },
];

export function getCityProfileByName(name: string): CityProfile | undefined {
  return cityProfiles.find((city) => city.name.toLowerCase() === name.toLowerCase());
}
