<template>
<nav :class="{ 'shadow-xl' : !topScreen }" class="w-full xl:h-20 md:h-20 sm:h-40 fixed top-0 flex xl:items-center md:items-center sm:items-baseline justify-start p-6 bg-white border-b flex-col sm:flex-row" style="z-index: 99;">
    <div class="flex items-center flex-shrink-0 mr-6 cursor-pointer" @click='$router.push({ name: "Home" })'>
        <img class="fill-current h-8 w-8 mr-4" width="54" height="54" src="@/assets/pokeball.png" />
        <span class="font-semibold text-2xl tracking-tight">Pok&eacute;Dex</span>
    </div>
    <div class="flex justify-start flex-grow flex-col mt-3 xl:mt-0 lg:mt-0 md:mt-0">
        <input v-model="searchParam" class="xl:w-1/5 md:w-2/5 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="search">
        <div v-show="filteredOptions.length > 0" class="divide-y absolute overflow-y-scroll lg:w-1/5 md:w-1/3 w-10/12 xl:w-1/5 rounded-md shadow-xl bg-white top-8 xl:top-4 md:top-4 lg:top-4" style="max-height: 450px;">
            <div class="flex items-center p-8 cursor-pointer hover:shadow-outline" v-for="( ele , idx) in filteredOptions" :key="idx"  @click="Goto(ele.nid)" >
                <div>
                    <img class="min-h-20 w-20" style="height: 5rem !important" :src="ImageSource( ele.nid )" :alt="`${ele.name} image`">
                </div>
                <div class="capitalize">{{ ele.name.replaceAll("-", " ") }}</div>
            </div>
        </div>
        <!-- class="xl:w-1/5 lg:w-1/5 md:w-2/5 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  -->
    </div>
</nav>
</template>
<script>
import PokemonJSONData from "@/data/pokemon.json";

export default {
    name: "NavBar",
    data () {
        return {
            searchParam: "",
            topScreen : true,
            filteredOptions: [],
            data : PokemonJSONData,
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    watch : {
        searchParam(nw){
            
            if(nw.trim().length < 3) {
                this.filteredOptions = []
                return;
            }

            let filteredData = this.data.filter( i => {
                return i.name.replaceAll("-", " ").toLowerCase().indexOf( nw.trim().toLowerCase()) > -1;
            })
            
            this.filteredOptions = filteredData;
        }
    },
    methods: {
        Goto( nid ){
            this.searchParam = ""
            this.$router.push({ name: "Pokemon", params : { nid: nid } })
        },
        Pad(number, length = 3) {
            let str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        },
        ImageSource( nid ){
            return `${process.env.VUE_APP_POKE_ASSET_URL}/sprites/${ nid }.png`
        },
        handleScroll(){
             if(window.pageYOffset > 0 ){
                // user is scrolled
                if(this.topScreen) this.topScreen = false
            }else{
                // user is at top of page
                if(!this.topScreen) this.topScreen = true
            }
        },
    }
}
</script>