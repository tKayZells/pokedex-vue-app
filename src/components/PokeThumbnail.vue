<template>
    <div class="p-3 bg-white rounded-md cursor-pointer border hover:shadow-md" @click="$emit('click')"> 
        <h2 class="text-lg mb-4 capitalize">{{ name }}</h2>
        <img v-lazyload class="h-32 w-32 mx-auto" :data-url="ImageURL" :alt="`${name} image`">
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
            return `${process.env.VUE_APP_POKE_ASSET_URL}/thumbnails/${ this.Pad( this.nid )}.png`
        }
    }   
}
</script>