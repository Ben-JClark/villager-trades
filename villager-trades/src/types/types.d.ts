export type Villager = {
  profession: string;
  image: string;
  workstation: string;
  levels: Level[];
};

export type Workstation = {
  name: string;
  image: string;
};

export type Level = {
  level: "Novice" | "Apprentice" | "Journeyman" | "Expert" | "Master";
  trades: Trade[];
};

export type Trade = {
  qtyWanted: string;
  itemWanted: string;
  itemWantedGif: boolean;
  secQtyWanted: string;
  secItemWanted: string;
  qtyGiven: string;
  itemGiven: string;
  itemGivenGif: boolean;
  Notes: string;
};

export type TradingItem = {
  name: string;
  direction: "wanted" | "giving";
};
