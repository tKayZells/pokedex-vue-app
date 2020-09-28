<template>
<div id="stats" >
    <div class="flex justify-around m-4">
        <a v-for="(d, i) in DISPLAYS" :key="i" 
            @click="currentDisplay = d" 
            class="px-3 py-1 font-semibold border-solid border rounded-md bg-white cursor-pointer"
            :class="[currentDisplay == d ? 'text-red-400 border-red-400' : 'text-gray-400']"> 
            {{ d }}
        </a>   
    </div>
    <div class="relative mx-auto xl:w-3/4" v-for="(ab, i) in base" :key="i">
        <div class="grid grid-cols-6 mb-2 items-center justify-between">
            <span class="text-s font-light inline-block py-1 px-2 col-span-1 text-gray-600">
                {{ ShortenLabel(ab.stat.name) }}
            </span>
            <div class="overflow-hidden h-3 mx-2 text-xs flex rounded bg-gray-200 w-full col-span-4" >
                <div :style="`width:`+CalculateBaseWidth( ab.base_stat )+`%`" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center" :class="`bg-`+CalculateStatColor( ab.base_stat)"></div>
            </div>
            <span class="text-s font-semibold inline-block col-span-1">
                {{ CalculateStat( ab.base_stat, ab.stat.name == STATS_NAME.hp ) }}
            </span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "PokemonStats",
    props: [ "base" ],
    data(){
        return {
            DISPLAYS : {
                BASE : "base",
                MIN : "min",
                MAX : "max"
            },
            COLORS : [  
                `red-400`,
                `red-600`,
                `orange-400`,
                `orange-600`,
                `yellow-400`,
                `yellow-600`,
                `green-400`,
                `green-600`,
                `teal-400`,
                `teal-600`,
                `blue-400`,
                `blue-600`,
                `purple-400`,
                `purple-600`
            ],
            STATS_NAME : {
                hp : "hp",
                attack: "atk",
                defense: "def",
               "special-attack": "sp.atk",
               "special-defense": "sp.def",
                speed : "spd"
            },
            currentDisplay : "base",
        }
    },
    methods : {
        ShortenLabel( statName ){
            return this.STATS_NAME[statName]
        },
        CalculateStat( basestat , isHp = false  ){
            
            if(this.currentDisplay == this.DISPLAYS.BASE) return basestat;
            let level = 100;

            if(isHp){            
                let hp = ( Math.floor( (2 * basestat) + parseInt(this.iv) + ( 0.25 * parseInt(this.ev))  ) * parseInt(level) / 100 ) +  parseInt(level) + 10; 
                return Math.floor(hp)
            }else {
                let stat = ( Math.floor( (2 * basestat) + parseInt(this.iv) + ( 0.25 * parseInt(this.ev))  ) * parseInt(level) / 100 )  + 5; 
                stat = Math.floor( stat * parseFloat(this.nature))
                return stat
            }
        },
        CalculateBaseWidth( basestat ){
            let width = Math.ceil((basestat * 100) / 180);
            return width
        },
        CalculateStatColor( basestat ){
            return this.COLORS[  Math.ceil(basestat * (this.COLORS.length - 1)  / 255)  ]
        }
    },
    computed : {
        nature(){
            switch (this.currentDisplay){
                case this.DISPLAYS.BASE:
                case this.DISPLAYS.MAX :
                    return 1.1;
                default:
                    return 0.9;
            }
        },
        iv(){
            switch (this.currentDisplay){
                case this.DISPLAYS.BASE:
                case this.DISPLAYS.MAX :
                    return 31;
                default:
                    return 0;
            }
        },
        ev(){
            switch (this.currentDisplay){
                case this.DISPLAYS.BASE:
                case this.DISPLAYS.MAX :
                    return 255;
                default:
                    return 0;
            }
        }
    }
}
</script>