<template>
<div :class="[ isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none']" class="modal opacity-0 absolute w-full h-full top-0 left-0 flex items-center justify-center">
  <div @click="Close" class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"></div>
  <div class="absolute w-3/4 bg-white rounded-md shadow-lg py-4 text-left px-6 z-50" style="z-index: 50 !important;">
    <div class="flex justify-between items-center pb-3">
        <p class="text-2xl font-bold">Pokedex Entry</p>
        <div class="modal-close cursor-pointer z-50" @click="Close">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
        </div>
    </div>

    <p>{{ content }}</p>
  </div>
</div>
</template>
<style scoped>
.modal {
    transition: opacity 0.25s ease;
}
</style>
<script>
export default {
    name: "Modal",
    props: [ "content", "isOpen" ],
    methods: {
        Close(){
            this.$emit("update:isOpen", false)
        }
    }
}
</script>