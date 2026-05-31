export interface Performer {
  id:        string;
  name:      string;
  genre:     string;
  time:      string;
  stage:     string;
  image:     string;
  headliner: boolean;
  category:  "music" | "culture" | "food_demo";
}

export interface Vendor {
  id:        string;
  name:      string;
  specialty: string;
  location:  string;
  image:     string;
  rating:    number;
}

export interface ScheduleItem {
  id:          string;
  time:        string;
  title:       string;
  stage:       string;
  type:        "food" | "music" | "culture";
  description: string;
  image:       string;
}

export interface ScheduleDay {
  day:   1 | 2 | 3;
  label: string;
  date:  string;
  items: ScheduleItem[];
}

export interface TicketTier {
  id:        string;
  name:      string;
  price:     number;
  perks:     string[];
  available: boolean;
  featured:  boolean;
}

export interface FoodItem {
  id:          string;
  name:        string;
  region:      string;
  description: string;
  image:       string;
  spiceLevel:  1 | 2 | 3;
}

export interface GalleryItem {
  id:    number;
  color: string;
  tall:  boolean;
  label: string;
}

export type PerformerFilter = "ALL" | "music" | "culture" | "food_demo";
