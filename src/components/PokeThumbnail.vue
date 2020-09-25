<template>
    <div class="p-3 bg-white rounded-md cursor-pointer border hover:shadow-md relative" @click="$emit('click')"> 
        <h2 class="absolute text-2xl">#{{ this.nid }}</h2>
        <h2 class="text-sm xl:text-sm md:text-base sm:text-base mb-4 capitalize text-right">{{ name | DashRemoval }}</h2>
        <img v-lazyload class="min-h-20 w-20 mx-auto" style="height: 5rem !important" :data-url="ImageURL" :alt="`${name} image`">
        <div class="flex justify-center mt-4">
            <pokemon-type v-for="(t, idx) in types" :key="idx" :type="t" />
        </div>
    </div>
</template>
<script>
import LazyLoadDirective from "@/directives/LazyLoadDirective";
import PokemonType from "./PokemonType";

export default {
    name: "PokeThumbnail",
    directives: {
        lazyload: LazyLoadDirective
    },
    filters: {
        DashRemoval( val ){
            return val ? val.replaceAll("-", " ") : ""
        },
    },
    components: { PokemonType },
    props : [ 'nid', 'name', 'types' ],
    methods: {
        Pad(number, length = 3) {
            let str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
    },
    computed : {
        ImageURL(){
            return `${process.env.VUE_APP_POKE_ASSET_URL}/thumbnails-compressed/${ this.Pad( this.nid )}.png`
        }
    }   
}
</script>