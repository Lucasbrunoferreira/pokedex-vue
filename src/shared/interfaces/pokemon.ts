interface IType {
  name: string;
  url: string;
}

interface IStats {
  name: string;
  url: string;
}

interface IPokemonTypes {
  slot: number;
  type: IType
}

interface IPokemonSprites {
  back_default: string;
  front_default: string;
  front_shiny: string;
  back_shiny: string;
}

interface IPokemonStats{
  base_stat: number;
  stat: IStats;
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: IPokemonSprites
  types: IPokemonTypes[];
  stats: IPokemonStats[];
}
