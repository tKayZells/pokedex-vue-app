<template>
<nav :class="{ 'shadow-xl' : !topScreen }" class="w-full h-20 fixed top-0  flex items-center justify-start p-6 bg-white border-b" style="z-index: 99;">
    <div class="flex items-center flex-shrink-0 mr-6">
        <img class="fill-current h-8 w-8 mr-4" width="54" height="54" src="@/assets/pokeball.png" />
        <span class="font-semibold text-2xl tracking-tight">Pok&eacute;Dex</span>
    </div>
    <div class="flex justify-start flex-grow">
      <input class="xl:w-1/5 lg:w-1/5 md:w-2/5 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="search">
    </div>
</nav>
</template>
<script>
export default {
    name: "NavBar",
    data () {
        return {
            topScreen : true,
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(){
             if(window.pageYOffset > 0 ){
                // user is scrolled
                if(this.topScreen) this.topScreen = false
            }else{
                // user is at top of page
                if(!this.topScreen) this.topScreen = true
            }
        }
    }
}
</script>