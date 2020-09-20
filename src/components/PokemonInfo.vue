<template>
<div id="info" >
    <!-- <h2 class="text-2xl mx-4 px-3 text-left">Info</h2> -->
    <p class="cursor-pointer sm:cursor-pointer md:cursor-auto lg:cursor-auto xl:cursor-auto mb-3" @click="OpenModal">{{ genera_en }}</p>
    <modal :content="flavor_en" :isOpen="isOpen" v-on:update:isOpen="isOpen = false"></modal>
    <div ref="flavor_text" class="m-4 p-3 hidden sm:hidden md:block lg:block xl:block">
        <p>{{ flavor_en }}</p>
    </div>
    <div class="divide-y divide-gray-400 mx-auto w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3">
        <div class="grid grid-cols-3 gap-8 xl:p-5 md:py-4 py-2">
            <div class="text-right font-semibold">Height</div>
            <div class="text-left col-span-2">{{ ProperHeight }}</div>
        </div>
        <div class="grid grid-cols-3 gap-8 xl:p-5 md:py-4 py-2">
            <div class="text-right font-semibold">Weight</div>
            <div class="text-left col-span-2">{{ ProperWeight }}</div>
        </div>
        <div class="grid grid-cols-3 gap-8 xl:p-5 md:py-4 py-2">
            <div class="text-right font-semibold">Type</div>
            <div class="text-left ">
                <pokemon-type v-for="(t, i) in type" :key="i" :type="t.type.name" />
            </div>
        </div>
        <div class="grid grid-cols-3 gap-8 xl:p-5 md:py-4 py-2">
            <div class="text-right font-semibold">Abilities</div>
            <div class="text-left capitalize col-span-2">
                <p v-for="(ab, i) in ability" :key="i">{{ ab.ability.name }}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import PokemonType from "@/components/PokemonType";
import Modal from "@/components/Modal";
export default {
    components: { PokemonType, Modal },
    name: "PokemonInfo",
    props: [ "flavor", "ability", "type", "height", "weight", "genera" ],
    data(){
        return {
            isOpen: false
        }
    },
    methods :{
        IsFlavorVisible(){
            return this.$refs.flavor_text.offsetParent != null;
        },
        OpenModal(){
            if( !this.IsFlavorVisible() )
            {
                this.isOpen = !this.isOpen;
            }
        }
    },
    computed : {
        flavor_en(){
            return !this.flavor ? 
                    "" : 
                    this.flavor.filter( i => i.language.name == "en" && i.version.name == "alpha-sapphire" )[0].flavor_text
        },
        genera_en(){
            return !this.genera ? 
                    "" : 
                    this.genera.filter( i => i.language.name == "en" )[0].genus
        },
        ProperHeight(){
            let meters = this.height / 10;
            let footinch = Math.floor(meters * 3.281) + '"' + Math.round(((meters * 3.281) % 1) * 12)
            return `${meters.toFixed(2)}m (${footinch})`
        },
        ProperWeight(){
            let kg = this.weight / 10;
            let lbs = kg * 2.205;
            return `${kg.toFixed(2)}kg (${lbs.toFixed(2)}lbs)`
        }
    }
}
</script>