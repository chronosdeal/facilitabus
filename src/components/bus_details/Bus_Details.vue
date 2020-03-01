<template>
  <div id="Bus_Details">
          <div class="bg-white">
          <div id="detailscontainer" class="container bg-white">
              <div class="col-12 d-block d-md-flex">
                 <div class="col-12 col-md-7 h-100">  
                     <img class="img-fluid imgsized" :src="img">
                     <div class="text-center imgminrow" >
                        <img v-on:click="changeimg(item.imgminurl)"  class="img-fluid" v-bind:key="item.idimg" v-for="item in found.imgmin" :src="require('../../assets/img/'+item.imgminurl)">
                     </div>
                 </div>
                 <div class="col-12 col-md-5 mt-5 mt-md-0">
                     <div id="detailstextcontainer" class="container">
                         <h4>{{found.name}}</h4>
                         <h2>R${{found.price}}</h2>
                         <div class="pt-2">
                         <p class="darkergrey">FICHA TÉCNICA</p>
                         <p>Motor: <span>{{found.motor}}</span></p>
                         <p>Ano:<span> {{found.year}}</span></p>
                         <p class="darkergrey pt-3">DESCRIÇÃO</p>
                         <p>{{found.description}}</p>
                         <p class="darkergrey pt-3">MAIS INFORMAÇÕES</p>
                         <p class="telgrey">(11) 99902-3454</p>
                         <a class="btn whatsappdetailsbus" target="_blank" href="https://api.whatsapp.com/send?phone=5511999023454"><i class="fab fa-whatsapp pr-1"></i><span class="pl-1">WHATSAPP</span></a>
                        </div>
                     </div>
                 </div>
              </div>
          </div>
        </div>
  </div>
</template>

<script>
import store from '../json/store.json'
export default {
  
  name: 'Bus_Details',

  data(){
    return{
      item: [],
      items:[],
      found:[],
      img: '',
    }
  },

  mounted(){
      this.items = store.Bus
      this.item = this.$route.params.id
      this.found = this.items.find(item => item.id ==this.item)
      this.img = require('../../assets/img/'+this.found.imgurl)
      console.log(this.array)
  },
  
  methods:{
    changeimg(imgmin){
           return this.img = require('../../assets/img/'+imgmin)
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
