<template>
    <div class="w-24 p-1 m-2 border rounded-md text-white" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);" :style="`background: ${types[type].color}`">
        {{ type }}
    </div>
</template>
<script>
export default {
    name: 'PokemonType',
     props: {
        type: {
            type: String,
            validator: function(val){
                return ["normal", "fire", 
                    "water", "electric",
                    "grass", "ice",
                    "fighting", "poison",
                    "ground", "flying",
                    "psychic", "bug",
                    "rock", "ghost",
                    "dragon", "dark",
                    "steel", "fairy"].indexOf(val) !== -1
            }
        }
    },
    data(){
        return {
            types: {
                normal: {
                    text: "normal",
                    color: "#aaaa99"
                },
                fire : {
                    text: "fire",
                    color: "#f42"
                },
                water: {
                    text: "water",
                    color: "#39f"
                },
                electric: {
                    text: "electric",
                    color: "#ffbf00"
                },
                grass: {
                    text: "grass",
                    color: "#5b9b41"
                },
                ice : {
                    text: "ice",
                    color: "#52cad7"
                },
                fighting : {
                    text: "fighting",
                    color: "#b54"
                },
                poison: {
                    text: "poison",
                    color: "#a59"
                },
                ground: {
                    text: "ground",
                    color: "#c1a349"
                },
                flying: {
                    text: "flying",
                    color: "#89f"
                },
                psychic: {
                    text: "psychic",
                    color: "#f59"
                },
                bug: {
                    text: "bug",
                    color: "#ab2"
                },
                rock: {
                    text: "rock",
                    color: "#bb8e66"
                },
                ghost: {
                    text: "ghost",
                    color: "#66b"
                },
                dragon: {
                    text: "dragon",
                    color: "#76e"
                },
                dark: {
                    text: "dark",
                    color: "#754"
                },
                steel: {
                    text: "steel",
                    color: "#aab"
                },
                fairy: {
                    text: "fairy",
                    color: "#e9e"
                }
            }
        }
    }
}
</script>