<template>
<div class="h-screen">
  <div class="m-auto xl:h-screen flex flex-wrap flex-col sm:flex-row justify-center items-center">
    <div class="p-4 w-full xl:w-1/3 md:w-2/3 sm:w-full">        
        <h1 class="text-4xl my-4 xl:text-left sm:text-center uppercase">Charizard</h1>

        <button>UP</button>

        <!-- Regular Info -->
        <div id="info" style="display:none">
          <!-- <h2 class="text-2xl mx-4 px-3 text-left">Info</h2> -->
          <div class="m-4 p-3 text-justify">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus vel iure fugit magni, dolores atque! Itaque</p>
          </div>
          <div class="divide-y divide-gray-400 mx-auto w-3/5">
            <div class="grid grid-cols-2 gap-8 xl:p-5 sm:p-1">
              <div class="text-right">Height</div>
              <div class="text-left">20</div>
            </div>
            <div class="grid grid-cols-2 gap-8 xl:p-5 sm:p-1">
              <div class="text-right">Weight</div>
              <div class="text-left">20</div>
            </div>
            <div class="grid grid-cols-2 gap-8 xl:p-5 sm:p-1">
              <div class="text-right">Type</div>
              <div class="text-left">
                <p>Blaze</p>
                <p>Blaze</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-8 xl:p-5 sm:p-1">
              <div class="text-right">Abilities</div>
              <div class="text-left">
                <p>Blaze</p>
                <p>Blaze</p>
                <p>Blaze</p>
              </div>
            </div>
          </div>
        </div>

        <!-- STATS -->
        <div id="stats" >
          <!-- <h2 class="text-2xl mx-4 px-3 text-left">Stats</h2> -->
          <div class="flex justify-around m-4">
            <button>Base</button>
            <button>Min</button>
            <button>Max</button>
          </div>
          <div class="relative mx-auto xl:w-3/4">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                  HP
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  30%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
          </div>
          <div class="relative mx-auto xl:w-3/4">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                  Attack
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  30%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
          </div>
          <div class="relative mx-auto xl:w-3/4">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                  Special Attack
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  30%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
          </div>
          <div class="relative mx-auto xl:w-3/4">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                  Defense
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  30%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
          </div>
          <div class="relative mx-auto xl:w-3/4">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                  Special Defense
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  30%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
          </div>
          <div class="relative mx-auto xl:w-3/4">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                  Speed
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  30%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
          </div>
        </div>

        <!--  -->
        <button>DOWN</button>
        <!-- <p class="text-gray-600 text-opacity-25 text-6xl absolute" style="top:10px; left:20%">{{ nid }}</p> -->
    </div>
    <div class="p-4 xl:w-1/2 md:w-2/3 sm:w-2/3">
      <img :src="ImageURL" :alt="`${nid} image`">
    </div>
    <!-- <button @click="$router.go(-1)" > go back </button> -->
  </div>
</div>
</template>
<script>
export default {
  props: [ "nid" ],
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
          return `${process.env.VUE_APP_POKE_ASSET_URL}/images/${ this.Pad( this.nid )}.png`
      }
  }   
}
</script>