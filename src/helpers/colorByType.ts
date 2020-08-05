type typesOption = {
  [key: string]: string;
};

export default (typeName: string) => {
  const TYPESCOLORS: typesOption = {
    normal: '#bbbbb0',
    fighting: '#a65545',
    flying: '#78a3ff',
    poison: '#a0599a',
    ground: '#edce5b',
    rock: '#cebd72',
    bug: '#c2d21f',
    ghost: '#7874d5',
    steel: '#c3c1d9',
    fire: '#f95342',
    water: '#56aeff',
    grass: '#88d24e',
    electric: '#fbe83f',
    psychic: '#f963b3',
    ice: '#95f1ff',
    dragon: '#8976ff',
    dark: '#8b6854',
    fairy: '#f9adff',
    unknown: '#9b9b9b',
    shadow: '#343344',
  };

  return TYPESCOLORS[typeName];
};
