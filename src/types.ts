export interface NameUrlPair {
  name: string;
  url: string;
}

interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

export interface Move {
  move: NameUrlPair;
}

export interface MoveStats {
  id: number;
  name: string;
  flavor_text_entries: MoveDescription[];
}

export interface MoveDescription {
  flavor_text: string;
  version_group: {
    name: string;
  };
}

interface SimpleSprite {
  front_default: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
}

interface OtherSprites {
  dream_world: SimpleSprite;
  "official-artwork": SimpleSprite;
}

interface TypeOfPokemon {
  type: NameUrlPair;
}

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  moves: Move[];
  name: string;
  sprites: Sprites;
  weight: number;
}
