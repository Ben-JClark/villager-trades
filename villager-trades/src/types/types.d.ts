export type Villager = {
  profession: string;
  image: string;
  workstation: string;
  tradeArray: Trade[];
};

export type Workstation = {
  name: string;
  image: string;
};

export type Trade = {
  id: number;
  level: string;
  qtyWanted: string;
  itemWanted: string;
  qtyGiven: string;
  itemGiven: string;
};
