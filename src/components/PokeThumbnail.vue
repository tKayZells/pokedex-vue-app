<template>
    <div class="w-48 h-50 max-w-sm p-3 m-3 cursor-pointer shadow hover:shadow-xl" @click="$emit('click')"> 
        <h2 class="text-lg">Name</h2>
        <img class="h-32 w-32 mx-auto" src="../assets/logo.png" alt="Sunset in the mountains">
        <div class="flex justify-center">
            <span class="flex-1">grass</span>
            <span class="flex-1">grass</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "PokeThumbnail",
}
</script>