import type { ScheduleDay } from "@/types/festival";

export const schedule: ScheduleDay[] = [
  {
    day:   1,
    label: "EVENT 1",
    date:  "June 12",
    items: [
      {
        id: "e1-1",
        time: "12:00 PM",
        type: "food",
        title: "Flavours That Fire Up Your Soul",
        stage: "Street Food Quarter",
        image: "/image/spag.png",
        description: "We're talking smoky-soft bolé, kissed by open flames, paired with spicy pepper sauce that bites just right, and grilled fish that falls off the bone. It's the kind of taste that makes you close your eyes, hum a little, and lick your fingers — twice. From bolé to classic seafood and every African dish you can imagine, you're in for a ride.",
      },
      {
        id: "e1-2",
        time: "1:30 PM",
        type: "culture",
        title: "A Taste of Then",
        stage: "Heritage Corner",
        image: "/image/oau-image.jpg",
        description: "Remember the food that raised you? The jollof that scented the whole compound on a Sunday, the ogi your grandmother stirred before sunrise. This is where we pay homage — traditional Nigerian recipes, served the old way, with the stories that go with them. Pull up a stool and eat like you're home.",
      },
      {
        id: "e1-3",
        time: "3:00 PM",
        type: "food",
        title: "The Chef's Table: Live Masterclass",
        stage: "Demo Kitchen",
        image: "/image/chicken.png",
        description: "Up close, live, and loud. Top chefs go head-to-head crafting iconic Nigerian dishes in real time. Watch the technique, steal the secrets, and eat the results. Suya, egusi, jollof rice — done the right way, right in front of you. Bring your appetite and a question.",
      },
      {
        id: "e1-4",
        time: "4:30 PM",
        type: "food",
        title: "The Sweet Trail",
        stage: "Sweet Quarter",
        image: "/image/doughnut.png",
        description: "Puff puff straight from the fire, chin chin by the bag, kuli kuli with groundnut paste, and ice cream styled with local flavours. Follow the trail from one stall to the next until you've had everything — then circle back for your favourite. No shame, no limits.",
      },
      {
        id: "e1-5",
        time: "6:00 PM",
        type: "music",
        title: "Beats, Bites & Vibes",
        stage: "Main Stage",
        image: "/image/mountain.png",
        description: "As the sun drops, the music rises. Afrobeats, highlife, and live performances carry the evening deep into the night. Eat, dance, vibe — this is what FoodTownFest is really about. The city won't sleep tonight, and neither will you.",
      },
    ],
  },
  {
    day:   2,
    label: "EVENT 2",
    date:  "TBA",
    items: [],
  },
  {
    day:   3,
    label: "EVENT 3",
    date:  "TBA",
    items: [],
  },
];
