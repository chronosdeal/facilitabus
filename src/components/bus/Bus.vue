<template>
  <div id="indexbus">
    <div class="container my-3">
               <div class="col-12 d-block d-md-flex">
                     <aside class="col-12 col-md-3">
                         <div id="filterbar" class="test">
                             <div class="asidetitle">
                                 <h3>FILTRAR POR</h3>
                             </div>
                             <form id="filterform" class="mt-3">
                                 <div class="form-group">
                                     <label for="marcainput">Marcas</label>
                                     <ul>
                                        <li id="1" :class="{activeli:1 == selected}" @click="selected = 1" v-on:click="()=>{selectedMarca = 'All'; page = 1; begin=0; limit=9; previouslimit=0; max=0; savepage=''; pages=''}"><a >TODAS</a></li>
                                        <li id="2" :class="{activeli:2 == selected}" @click="selected = 2" v-on:click="()=>{selectedMarca = 'Marcopolo'; page=1; begin=0; limit=9; previouslimit=0}"><a >MARCOPOLO</a></li>
                                        <li id="3" :class="{activeli:3 == selected}" @click="selected = 3" v-on:click="()=>{selectedMarca = 'Busscar'; page = 1; begin=0; previouslimit=0; max=0; savepage=''; pages=''; if(filteredPeople.length<9){limit=filteredPeople.length}else{limit=9}}"><a >BUSSCAR</a></li>
                                        <li id="4" :class="{activeli:4 == selected}" @click="selected = 4" v-on:click="()=>{selectedMarca = 'Mascarello'; page = 1; begin=0; previouslimit=0; max=0; savepage=''; pages=''; if(filteredPeople.length<9){limit=filteredPeople.length}else{limit=9}}"><a >MASCARELLO</a></li>
                                        <li id="5" :class="{activeli:5 == selected}" @click="selected = 5" v-on:click="()=>{selectedMarca = 'Comil'; page = 1; begin=0; previouslimit=0; max=0; savepage=''; pages=''; if(filteredPeople.length<9){limit=filteredPeople.length}else{limit=9}}"><a >COMIL</a></li>
                                        <li id="6" :class="{activeli:6 == selected}" @click="selected = 6" v-on:click="()=>{selectedMarca = 'Neobus'; page = 1; begin=0; previouslimit=0; max=0; savepage=''; pages=''; if(filteredPeople.length<9){limit=filteredPeople.length}else{limit=9}}"><a >NEOBUS</a></li>
                                       <!-- <li><a v-on:click="()=>{selectedMarca = 'Caio'; page = 1; begin=0; previouslimit=0; max=0; savepage=''; pages=''; limit=9}">CAIO</a></li> -->
                                     </ul>
                                  </div>
                             </form>
                         </div>
                     </aside>

                     <div v-if="(resultQuery && resultQuery.length > 0)" id="gallery" class="col-12 col-md-9">
                         <div class="gallerytitle">
                          <h3>ÔNIBUS A VENDA</h3>
                         </div>
                         <div class="gallerycontainer container">
                            <ul class="d-block d-md-flex text-center text-md-left wrap">
                                 <li v-bind:key="item.id" v-for="item in resultQuery">
                                 <router-link :to="{name: 'bus_single', params: {id: item.id}}">
                                     <div class="gallerycard card">
                                         <img class="card-img-top" :src="require('../../assets/img/'+item.imgurl)" alt="Card image cap">
                                         <div class="card-body">
                                         <h5 class="card-title">R${{item.price}}</h5>
                                             <div class="card-text">
                                                <p></p> 
                                                <p class="darkergrey">{{item.name}}</p> 
                                                <p class="busyear">{{item.year}}</p> 
                                             </div>
                                         </div>
                                     </div>
                                  </router-link>
                                 </li>
                             </ul>
                         </div>
                     <!--   
                        <nav aria-label="Page Navigation">
                            <ul class="pagination d-flex justify-content-center">
                                <li v-if="page>1" class="page-item"><a class="page-link" v-on:click="prevpage()">Anterior</a></li>
                                <li v-else-if="page<=1" class="page-item disabled"><a class="page-link" v-on:click="prevpage()">Anterior</a></li>
                                <li v-if="page!=pages" class="page-item "><a class="page-link" v-on:click="nextpage()">Próximo</a></li>
                                <li v-else class="page-item disabled"><a class="page-link" v-on:click="nextpage()">Próximo</a></li>
                            </ul>
                        </nav>
                        -->
                         <div class="galleryfooter">
                             <h3>Resultado(s)<span>1-{{resultQuery.length}}</span> de <span>{{resultQuery.length}}</span></h3>
                         </div>
                     </div>


                    <div v-else-if="(!resultQuery)" id="gallery" class="col-12 col-md-9">
                         <div class="gallerytitle">
                          <h3>ÔNIBUS A VENDA</h3>
                         </div>
                         <div class="gallerycontainer container">
                         <ul class="d-block d-md-flex text-center text-md-left wrap">
                                 <li v-bind:key="item.id" v-for="item in filteredPeople.slice(begin, limit)">
                                 <router-link :to="{name: 'bus_single', params: {id: item.id}}">
                                     <div class="gallerycard card">
                                         <!--<img class="card-img-top" :src="require('../../assets/img/'+item.imgurl)" alt="Card image cap">-->
                                         <img class="card-img-top" :src="require('../../assets/img/'+item.imgurl)" alt="Card image cap">
                                         <div class="card-body">
                                         <h5 class="card-title">R${{item.price}}</h5>
                                             <div class="card-text">
                                                <p></p> 
                                                <p class="darkergrey">{{item.name}}</p> 
                                                <p class="busyear">{{item.year}}</p> 
                                             </div>
                                         </div>
                                     </div>
                                  </router-link>
                                 </li>
                             </ul>
                         </div>
                         <nav aria-label="Page Navigation">
                            <ul class="pagination d-flex justify-content-center">
                                <li v-if="page>1" class="page-item"><a class="page-link" v-on:click="prevpage()">Anterior</a></li>
                                <li v-else-if="page<=1" class="page-item disabled"><a class="page-link" v-on:click="prevpage()">Anterior</a></li>
                                <li v-if="limit<filteredPeople.length" class="page-item "><a class="page-link" v-on:click="nextpage()">Próximo</a></li>
                                <li v-else class="page-item disabled"><a class="page-link" v-on:click="nextpage()">Próximo</a></li>
                            </ul>
                        </nav>
                         <div class="galleryfooter">
                             <h3>Resultado(s)<span>{{begin+1}}-{{limit}}</span> de <span>{{filteredPeople.length}}</span></h3>
                         </div>
                     </div>



                     <div v-else id="gallery" class="col-12 col-md-9">
                         <div class="gallerytitle">
                          <h3>ÔNIBUS A VENDA</h3>
                         </div>
                         <div class="gallerycontainer container">
                         <ul class="d-block d-md-flex text-center text-md-left wrap">
                                <h5>Nenhum resultado encontrado!</h5>
                            </ul>
                         </div>
                     </div>
                 </div>
             </div>
  </div>
</template>

<script>
//import axios from 'axios'
import store from '../json/store.json'

export default {
  name: 'Bus',

    data(){
        return{
        selected: 1,
        items:store.Bus,
        search:'',
        ok:null,
        searchresult:[],
			page: 1,
            max:0,
            previouslimit:0,
            savepage:'',
			pages: '',	
            begin:0,
            limit:9,
            selectedMarca: "All"
    }
    
    },

    beforeMount(){
        this.pages = this.items.length/9
    },


    methods:{

    makeselected: function() {
        this.active=false;
      this.active = true;

    },
        prevpage(){
            if(this.previouslimit!=0){
                this.page=this.page-1
                this.begin=this.begin-9
                this.limit=this.previouslimit-9
                this.previouslimit=0
                window.scrollTo(0,0);
            }
            else{
            this.page=this.page-1
            this.begin=this.begin-9
            this.limit=this.limit-9
            window.scrollTo(0,0);
            }
        },
        nextpage(){
            if(this.limit+9>this.items.length){
                this.page=this.page+1
                this.begin=this.begin+9
                this.previouslimit=this.limit+9
                this.limit=this.items.length
                window.scrollTo(0,0);
            }
            else if(this.limit+9>this.filteredPeople.length){
                this.page=this.page+1
                this.begin=this.begin+9
                this.previouslimit=this.limit+9
                this.limit=this.filteredPeople.length
                window.scrollTo(0,0); 
            }
            else{
                this.page=this.page+1
                this.begin=this.begin+9
                this.limit=this.limit+9
                window.scrollTo(0,0);
            }

        },

    },

    mounted(){
        
        if(this.pages%1===0){
            return
        }
        else{
            this.savepage=this.pages
            this.pages=this.pages%1
            this.savepage=(this.savepage-this.pages)+1
            this.pages = this.savepage
        }    
    },
    
  computed: {
    resultQuery(){
      if(this.$route.params.name){
      return this.items.filter((item)=>{
        return this.$route.params.name.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }
      else{
        return this.$route.params.name
      }
    },

    filteredPeople: function() {
			var marca = this.selectedMarca;
			
			if(marca === "All") {
				return this.items;
			} else {
				return this.items.filter(function(person) {
					return person.marca === marca;
				});
			}
		}
    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
