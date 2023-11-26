export type Villager = {
  profession: string;
  image: string;
  workstation: Workstation;
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
  itemWanted: Item;
  qtyGiven: string;
  itemGiven: Item;
};

export type Item = {
  name: string;
  image: string;
};
