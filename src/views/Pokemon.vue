<template>
<div style="overflow:hidden;">
  <div class="m-auto flex xl:h-screen flex-wrap flex-col sm:flex-row justify-center items-center">
    <div class="p-4 w-full xl:w-1/3 md:w-2/3 sm:w-full relative">
        <h1 class="text-2xl lg:text-4xl xl:text-4xl md:text-3xl mb-1 xl:text-center sm:text-center uppercase">{{ pokemon.name | DashRemoval }}</h1>

        <div class="items-center ">

          <div class="w-full">
            <!-- Regular Info -->
            <transition name="slide-fade" mode="out-in">
              <pokemon-info v-if="currentPanel == 0" 
                :flavor="pokemonSpecies.flavor_text_entries" 
                :ability="pokemon.abilities" 
                :type="pokemon.types" 
                :genera="pokemonSpecies.genera"
                :height="pokemon.height" 
                :weight="pokemon.weight" />

              <!-- STATS -->
              <pokemon-stats v-else :base="pokemon.stats" />
            </transition>

          </div>

          <div class="flex justify-between w-full left-0 absolute" style="top: 150px">
            <font-awesome-icon @click="currentPanel = 0" 
                :class="[currentPanel == 1 ? 'text-black cursor-pointer animate-bounce' : 'text-gray-400']" icon="caret-left" size="2x" />
                
            <font-awesome-icon @click="currentPanel = 1"
              :class="[currentPanel == 0 ? 'text-black cursor-pointer animate-bounce' : 'text-gray-400']" icon="caret-right" size="2x" />
          </div>
        </div>
        <!-- <p class="text-gray-600 text-opacity-25 text-6xl absolute" style="top:10px; left:20%">{{ nid }}</p> -->
    </div>
    <div class="p-4 xl:w-1/2 md:w-2/3 sm:w-2/3 relative">
      <div class="flex flex-wrap justify-center flex-row" >
        <div class="m-2" v-for="(val, i) in pokemonForms" :key="i">
          <a @click="ChangeForm(i)" :class="{ 'text-red-600 border-red-600' : selectedForm == i }" class="cursor-pointer px-2 py-1 mx-1 border-solid border rounded-md bg-white text-sm capitalize">
            {{ val.name | DashRemoval | RemoveBaseName(pokemon.species.name) }}
          </a>
        </div>
      </div>
      <img class="m-auto xl:min-h-fixed-880 xl:min-w-fixed-880 md:min-h-fixed-440 md:min-w-fixed-440 sm:h-64 sm:w-64" :src="ImageURL" :alt="`${nid} image`">      
    </div>
    <!-- <button @click="$router.go(-1)" > go back </button> -->
  </div>
</div>
</template>
<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<script>
import PokemonInfo from "@/components/PokemonInfo";
import PokemonStats from "@/components/PokemonStats";

export default {
  components: { PokemonInfo, PokemonStats },
  props: [ "nid" ],
  mounted() {
    this.Load();
  },
  filters : {
    DashRemoval( val ){
      return val.replaceAll("-", " ")
    },
    RemoveBaseName( val, arg ){
      console.log(arg);
      if(val.toLocaleLowerCase() == arg)
        return val
      return val.replace(arg, "");
    }
  },
  data(){
    return {
      currentPanel: 0,
      pokemon : {},
      pokemonSpecies : {},
      pokemonForms : [],
      selectedForm : 0
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
          .finally( () => {  })
        this.PokeApi.getPokemonSpeciesByName( this.nid )
          .then( ( result ) => {
            this.pokemonSpecies = result;
            return this.pokemonSpecies.varieties.filter( i => !i.is_default)
          })
          .then( (forms) => {
            if(forms.length < 6){
              const regexp = /(\d+)\/$/;
              let formid = forms.map( i => i.pokemon.url.match(regexp)[1])
              if(formid.length > 0 && formid.length < 6){
                this.LoadForm(formid);
              }
            }
             
          })
          .finally( () => { })
      },
      LoadForm( forms ){
        let arr = []
        
        for(let i = 0; i < forms.length; i++){
          arr.push(this.PokeApi.getPokemonByName(forms[i]))
        }
        Promise.all(arr).then( values => {
          this.pokemonForms.push(this.pokemon)
          values.forEach( (v) => {
            this.pokemonForms.push(v)
          })
        })
      },
      ChangeForm( index ) {
        this.selectedForm = index;
        this.pokemon = this.pokemonForms[ index ];
      }
  },
  computed : {
      ImageURL(){
          let imgResource = this.Pad( this.nid );
          if(this.selectedForm != 0){

            const capitalize = (str ) => (str.split('-').map(e=>e.charAt(0).toUpperCase() + e.slice(1))).join('-');
            
            let formImg = capitalize( this.pokemonForms[this.selectedForm].name.substr( this.pokemonForms[this.selectedForm].name.indexOf('-') ));
            imgResource += formImg
          }
          return `${process.env.VUE_APP_POKE_ASSET_URL}/images/${ imgResource }.png`
      },
      AltFormsImgs(){
          let imgResource = this.Pad( this.nid );
          let imgurls = []

          const capitalize = (str, lower = false) =>
            (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

          this.pokemonForms.forEach((element, idx) => {
            if(idx == 0) return;
            let formImg = capitalize( element.name.substr( element.name.indexOf('-') ) );
            imgResource += formImg
            imgurls.push(`${process.env.VUE_APP_POKE_ASSET_URL}/images/${ imgResource }.png`);
          });
          
          return imgurls;
      }
  }   
}
</script>