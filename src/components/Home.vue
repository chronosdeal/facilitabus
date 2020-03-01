<template>
  <div id="Home">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import Navbar from './navbar/Navbar.vue'
import Footer from './footer/Footer.vue'

export default {
  name: 'Home',
  components:{
    Navbar,
    Footer
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
