<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
    <poke-thumbnail v-for="( val, idx) in Display" :key="idx" @click="clickevent(val)" :nid="val.nid" :name="val.name" :types="val.type" />
  </div>
</template>

<script>
import PokeThumbnail from "@/components/PokeThumbnail";
import PokemonJSONData from "@/data/pokemon.json";
export default {
  name: 'Home',
  components: {
    PokeThumbnail
  },
  data(){
    return {
      pokemons: Array.apply(null, Array(150)).map(function (x, i) { return i; })
    }
  },
  mounted(){
    this.pokemons = PokemonJSONData;
  },
  computed : {
    Display(){
      return this.pokemons.slice(0, 55)
    }
  },
  methods: {
    clickevent( val ){
      this.$router.push({ name: "Pokemon", params : { nid: val.nid } })
    }
  }
}
</script>
