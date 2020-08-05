<template>
  <div class="pokedex">
    <div class="img-wrapper">
      <img width="125" :src="state.pokemon.sprites.front_default" />
    </div>

    <h1>{{ state.pokemon.name }}</h1>

    <div class="types-list">
      <span
        :style="{ backgroundColor: colorByPokemonType(type.type.name) }"
        class="badge-type"
        v-for="(type, index) in state.pokemon.types"
        :key="index"
      >{{ type.type.name }}</span>
    </div>

    <ul class="poke-stats">
      <li
        v-for="(stat, index) in state.pokemon.stats"
        :key="index"
      >{{ stat.stat.name }}: {{ stat.base_stat }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@vue/composition-api';
import randomInteger from '@/helpers/randomInteger';
import pokemonService from '@/services/pokemon';
import { IPokemon } from '@/shared/interfaces/pokemon';
import Vue from 'vue';
import colorByPokemonType from '@/helpers/colorByType';

export default defineComponent({
  name: 'Pokedex',
  setup() {
    const MAX_POKEMON_CODE = 807;

    const state = reactive({
      pokemon: {
        name: '',
        types: [{ slot: 0, type: { name: '' } }],
        stats: [{ stat: { name: '' }, base_stat: 0 }],
        sprites: {
          front_default: '',
        },
      } as IPokemon,
    });

    const fetchRandomPokemon = () => {
      const pokemonCode = randomInteger({ max: MAX_POKEMON_CODE });
      pokemonService
        .getByCode(pokemonCode)
        .then((result) => {
          state.pokemon = result.data;
          Vue.toasted.show(`Um ${state.pokemon.name} selvagem apareceu!`, {
            type: 'success',
          });
        })
        .catch(() => {
          Vue.toasted.show('Houve algum problema...', { type: 'error' });
        });
    };

    onMounted(() => {
      fetchRandomPokemon();
    });

    return {
      state,
      colorByPokemonType,
    };
  },
});
</script>

<style scoped lang="scss">
div.pokedex {
  width: 320px;
  height: 450px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.img-wrapper {
    margin-top: 25px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

  h1 {
    text-transform: capitalize;
    margin-top: 25px;
  }

  div.types-list {
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
    min-width: 180px;

    span.badge-type {
      display: block;
      padding: 5px;
      border-radius: 3px;
      font-size: 12px;
      color: #fff;
    }
  }

  ul.poke-stats {
    li {
      font-size: 12px;
      margin: 10px 0;
    }
  }
}
</style>
