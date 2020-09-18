<template>
<div class="h-screen">
  <div class="m-auto xl:h-screen flex flex-wrap flex-col sm:flex-row justify-center items-center">
    <div class="p-4 w-full xl:w-1/3 md:w-2/3 sm:w-full">
        <h1 class="text-4xl my-4 xl:text-left sm:text-center uppercase">{{ pokemon.species.name }}</h1>

        <div class="flex items-center ">
          <font-awesome-icon class="animate-pulse" icon="caret-left" size="2x" />
          
          <!-- Regular Info -->
          <pokemon-info class="hidden flex-1" :flavor="pokemonSpecies.flavor_text_entries" :ability="pokemon.abilities" :type="pokemon.types" :height="pokemon.height" :weight="pokemon.weight" />

          <!-- STATS -->
          <pokemon-stats class="flex-1" :base="pokemon.stats" />

          <font-awesome-icon class="animate-pulse" icon="caret-right" size="2x" />
        </div>
        <!-- <p class="text-gray-600 text-opacity-25 text-6xl absolute" style="top:10px; left:20%">{{ nid }}</p> -->
    </div>
    <div class="p-4 xl:w-1/2 md:w-2/3 sm:w-2/3">
      <img :src="ImageURL" :alt="`${nid} image`">
    </div>
    <!-- <button @click="$router.go(-1)" > go back </button> -->
  </div>
</div>
</template>

<script>
import PokemonInfo from "@/components/PokemonInfo";
import PokemonStats from "@/components/PokemonStats";

export default {
  components: { PokemonInfo, PokemonStats },
  props: [ "nid" ],
  mounted() {
    this.Load();
  },
  data(){
    return {
      pokemon : {},
      pokemonSpecies : {}
    }
  },
  methods: {
      Pad(number, length = 3) {
          let str = '' + number;
          while (str.length < length) {
              str = '0' + str;
          }
          return str;
      },
      Load(){
        this.PokeApi.getPokemonByName( this.nid )
          .then( ( result ) => {
            this.pokemon = result;
          })
          .finally( () => {
            console.log("completed")
          })
        this.PokeApi.getPokemonSpeciesByName( this.nid )
          .then( ( result ) => {
            this.pokemonSpecies = result;
          })
          .finally( () => {
            console.log("completed")
          })
      }
  },
  computed : {
      ImageURL(){
          return `${process.env.VUE_APP_POKE_ASSET_URL}/images/${ this.Pad( this.nid )}.png`
      }
  }   
}
</script>