<template>
  <div id="app" class="mx-auto" style="">
    <nav-bar />
    <transition name="fade">
      <router-view class="p-4 xl:mt-20 lg:mt-20 md:mt-20 mt-32 " />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
import NavBar from "@/components/NavBar";
export default {
  components : {
    NavBar
  }
}
</script>
