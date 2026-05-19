import type { ScheduleDay } from "@/types/festival";

export const schedule: ScheduleDay[] = [
  {
    day:   1,
    label: "EVENT 1",
    date:  "June 12",
    items: [
      { id: "e1-1", time: "12:00 PM", title: "Gates Open",                         stage: "Main Entrance",   type: "culture" },
      { id: "e1-2", time: "1:00 PM",  title: "Omenala Cultural Troupe",             stage: "Culture Stage",   type: "culture" },
      { id: "e1-3", time: "2:00 PM",  title: "Chef Emeka: Masterclass",             stage: "Demo Kitchen",    type: "food"    },
      { id: "e1-4", time: "3:30 PM",  title: "Yoruba Heritage Drummers",            stage: "Culture Stage",   type: "culture" },
      { id: "e1-5", time: "5:00 PM",  title: "The Highlife Collective",             stage: "Garden Stage",    type: "music"   },
      { id: "e1-6", time: "7:30 PM",  title: "Amara Voices",                        stage: "Main Stage",      type: "music"   },
      { id: "e1-7", time: "9:00 PM",  title: "DJ Rhythmix: Opening Night",          stage: "Main Stage",      type: "music"   },
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
