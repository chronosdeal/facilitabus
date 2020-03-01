<template>
  <div id="index">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <!-- <ol class="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
             </ol>
         -->
             <div class="carousel-inner">
               <div class="carousel-item active carousel1 d-flex">
                <div class="carouseltext py-5 align-self-center container text-white">
                    <h1>Pensando em comprar</h1>
                    <h1><span>SEU ÔNIBUS</span> SEMINOVO?</h1>
                    <h4 class="mt-5">Entre em contato e anuncie!</h4>

                    <router-link to="/contact"><button type="submit" class="btn mt-5">ANUNCIE AGORA</button></router-link>
                </div>
               </div>
             </div>
           </div>


                        <div id="highlightgallery" class="col-12 pt-3">
                         <div class="highlighttitle text-center container">
                          <h3>DESTAQUES DO MÊS</h3>
                         </div>
                         <div class="gallerycontainer">
                             <ul class="d-block d-md-flex justify-content-center text-center text-md-left wrap">
                                 <li>
                                 <router-link :to="{name: 'bus_single', params: {id: items[1].id}}">
                                     <div class="highlightcard card">
                                         <img class="card-img-top" :src="require('../../assets/img/'+items[1].imgurl)" alt="Card image cap">
                                         <div class="card-body">
                                         <h5 class="card-title">R${{items[1].price}}</h5>
                                             <div class="card-text">
                                                <p></p> 
                                                <p class="darkergrey">{{items[1].name}}</p> 
                                                <p class="busyear">{{items[1].year}}</p> 
                                             </div>
                                         </div>
                                     </div>
                                  </router-link>
                                 </li>
                                 <li>
                                 <router-link :to="{name: 'bus_single', params: {id: items[15].id}}">
                                     <div class="highlightcard card">
                                         <img class="card-img-top" :src="require('../../assets/img/'+items[15].imgurl)" alt="Card image cap">
                                         <div class="card-body">
                                         <h5 class="card-title">R${{items[15].price}}</h5>
                                             <div class="card-text">
                                                <p></p> 
                                                <p class="darkergrey">{{items[15].name}}</p> 
                                                <p class="busyear">{{items[15].year}}</p> 
                                             </div>
                                         </div>
                                     </div>
                                  </router-link>
                                 </li>
                                 <li>
                                 <router-link :to="{name: 'bus_single', params: {id: items[8].id}}">
                                     <div class="highlightcard card">
                                         <img class="card-img-top" :src="require('../../assets/img/'+items[8].imgurl)" alt="Card image cap">
                                         <div class="card-body">
                                         <h5 class="card-title">R${{items[8].price}}</h5>
                                             <div class="card-text">
                                                <p></p> 
                                                <p class="darkergrey">{{items[8].name}}</p> 
                                                <p class="busyear">{{items[8].year}}</p> 
                                             </div>
                                         </div>
                                     </div>
                                  </router-link>
                                 </li>
                             </ul>
                         </div>
                        </div>

                        <div id="financeiras">
                            <div class="container text-center py-5">
                             <h4>TRABALHAMOS COM AS MELHORES FINANCEIRAS DO MERCADO</h4>
                                <img class="bv" src="../../assets/img/BV_financeira-logo-branca.png"/>
                                <img src="../../assets/img/omni-logo-branca.png"/>
                                <img src="../../assets/img/porto_seguro-logo-branca.png"/>
                                <img src="../../assets/img/banco-daycoval-logo-branca.png"/>
                               
                            </div>
                        </div>

                        <div id="carouselmarcas" class="carousel slide py-3" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active text-center">
                            <img class="img-fluid" src="../../assets/img/busscar-logo-azul.png" alt="First slide">
                            <img class="img-fluid" src="../../assets/img/neobus-logo-azul.png" alt="Second slide">
                            <img class="img-fluid" src="../../assets/img/marcarello-logo-azul.png" alt="Second slide">
                            <img class="img-fluid" src="../../assets/img/volvo-logo-azul.png" alt="Second slide">
                            </div>
                            <div class="carousel-item text-center">
                            <img class="img-fluid" src="../../assets/img/mercedes-logo-azul.png" alt="Second slide">
                            <img class="img-fluid" src="../../assets/img/caio-logo-azul.png" alt="Second slide">
                            <img class="img-fluid" src="../../assets/img/scania-logo-azul.png" alt="Second slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselmarcas" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselmarcas" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>

  </div>
</template>

<script>
//import axios from 'axios'
import store from '../json/store.json'

export default {
  name: 'Index',

    data(){
        return{
        items:store.Bus,
  
        }
    }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
