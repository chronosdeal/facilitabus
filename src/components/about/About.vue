<template>
  <div id="about">
        <div class="container col-12 col-md-9 my-3">
        <h3>Sobre a empresa</h3>
        <p>A Facilita Bus é uma empresa voltada à comercialização de ônibus,
        em todas as regiões do Brasil, nós temos a experiência na comercialização
        de ônibus para oferecer os produtos mais adequados a cada cliente de acordo
        com suas necessidades específicas, atuamos de forma efetiva no mercado,
        a disposição dos clientes assegurando a qualidade e eficiência ao negócio
        garantindo rapidez no desembaraço necessária para operação. Aguardamos 
        suas consultas
        </p>
        <div class="py-5 col-12 col-md-11 cardrow d-block d-md-flex justify-content-center text-center">
          <div class="col-12 col-md-4">
            <div class="cardsvg">
              <img :src="svg1" />
              <h2>MISSÃO</h2>
              <p>Atender as necessidades dos clientes ofertando ônibus seminovos com qualidade.</p>
            </div>
          </div>
          <div class="col-12 col-md-4 ">
            <div class="cardsvg">
              <img :src="svg2" />
              <h2>VISÃO</h2>
              <p>Ser referência em atendimento aos clientes trazendo sempre o melhor no mercado.</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="cardsvg">
              <img :src="svg3" />
              <h2>VALORES</h2>
              <p>Empresa familiar que preza pela transparência e excelência de atendimento.</p>
            </div>
          </div>
        </div>

        </div>

  </div>
</template>

<script>


export default {
  name: 'Index',

    data(){
        return{
              svg1: require('../../assets/mission-icon.svg'),
              svg2: require('../../assets/vision-icon.svg'),
              svg3: require('../../assets/value-icon.svg')
            }
    },

    
   /* mounted() {
    axios.get(store)
        .then(response => (this.items = response.data.Bus) 
    )},
*/
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cardsvg{
  border:1px solid #dddddd;
  border-radius:10px;
  padding:20px 60px;
  box-shadow: 3px 3px 8px 3px rgba(0,0,0,0.1);
  min-height:100%;

}

.cardrow h2{
  font-size:20px;
  padding-top:20px;
  padding-bottom:10px;
  font-weight:bold;
  color:black;
}

.cardrow p{
  color:#686868;
}
#about{
  background-color:white;
  padding:20px 0;
  margin:10px 0;
}

</style>
