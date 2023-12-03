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
  qtyGiven: string;
  itemGiven: string;
};

/*
export type Trade = {
  id: number;
  level: string;
  qtyWanted: string;
  itemWanted: string;
  qtyGiven: string;
  itemGiven: string;
};
*/
