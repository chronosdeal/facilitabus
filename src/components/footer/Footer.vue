<template>
  <div class="footercomponent">
        <footer>
            <div class="container d-block d-md-flex text-center">
                <!--<a class="navbar-brand fl" href="#">FACILITA<span>BUS</span></a>-->
                <a class="navbar-brand fl" href="#"><img class="img-fluid navbarlogo" src="../../assets/img/logo-horizontal.png"></a>
                <div class="d-block-flex m-auto footerhover">
                    <div class="footermenu d-flex">
                      <router-link class="nav-link" to="/"><a class="nav-link" href="#">Home</a></router-link>
                      <router-link class="nav-link" to="/contact"><a class="nav-link" href="#">Contato</a></router-link>
                      <router-link class="nav-link" to="/bus"><a class="nav-link" href="#">Ônibus</a></router-link>
                    </div>
                    <div class="footersocialicons d-flex justify-content-center mt-3">
                      <a class="nav-link" href="https://api.whatsapp.com/send?phone=5511999023454" target="_blank"><i class="fab fa-whatsapp"></i></a>
                      <a class="nav-link" href="https://www.facebook.com/Facilita-Bus-109964900585303" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
