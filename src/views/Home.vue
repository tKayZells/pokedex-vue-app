<template>
  <div class="flex flex-wrap justify-center">
    <poke-thumbnail v-for="( val, idx) in list" :key="idx" @click="clickevent(val)">
      {{ val }}
    </poke-thumbnail>
  </div>
</template>

<script>
import PokeThumbnail from "@/components/PokeThumbnail";
export default {
  name: 'Home',
  components: {
    PokeThumbnail
  },
  data(){
    return {
      alot: Array.apply(null, Array(800)).map(function (x, i) { return i; })
    }
  },
  computed : {
    list(){
      return this.alot.slice(0, 35)
    }
  },
  methods: {
    clickevent( param ){
      this.$router.push({ name: "Detail", params : { param } })
    }
  }
}
</script>
