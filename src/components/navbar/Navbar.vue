<template>
  <div class="navcomponent">
          <nav class="py-4 navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
                <!-- <router-link to="/"> <a class="navbar-brand" href="#">FACILITA<span>BUS</span></a> </router-link>-->
                <router-link to="/"> <a class="navbar-brand" href="#"><img class="img-fluid navbarlogo" src="../../assets/img/logo-horizontal.png"></a></router-link>
                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 m-auto my-lg-0 searchform">
                    <input v-model="searchinput" class="form-control" type="search" placeholder="Encontre seu ônibus" aria-label="Search">
                  <router-link :to="{name: 'bus_search', params: {name: searchinput}}">  <button class="btn my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button> </router-link>
                </form>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <router-link class="nav-link effect" to="/"><a class="nav-link" href="#">INÍCIO</a></router-link>
                    </li>
                    <li class="nav-item">
                     <router-link class="nav-link effect" to="/bus"><a class="nav-link" href="#">VEÍCULOS A VENDA</a></router-link>
                    </li>
                    <li class="nav-item">
                     <router-link class="nav-link effect" to="/about"><a class="nav-link" href="#">A EMPRESA</a></router-link>
                    </li>
                    <li class="nav-item">
                     <router-link class="nav-link effect" to="/contact"><a class="nav-link" href="#">FALE CONOSCO</a></router-link>
                    </li>
                </ul>

                </div>
            </div>
          </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data(){
    return{
      searchinput:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
