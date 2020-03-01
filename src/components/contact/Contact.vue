<template>
  <div id="contact" class="">
        <div class="d-block d-md-flex">
            <div class="col-12 col-md-8 d-flex justify-content-center text-center bgcontact">
            <div class="align-self-center text-white py-2 py-md-0">
            <h1 style="font-weight:bold">Venha negociar seu ônibus conosco!</h1>
            <h4 class="text-white">Se preferir, nos chame no Whatsapp</h4>
            <h5 style="font-weight:bold">(11) 99902-3454</h5>
            </div>
            </div>
            <div class="col-12 col-md-4 form">
                <h1 class="text-center lineform">ESCREVA PARA NÓS</h1>
                <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nome</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Digite o seu nome aqui...">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput3">E-mail</label>
                    <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Digite seu melhor e-mail...">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput4">Telefone</label>
                    <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Digite o seu telefone aqui...">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Mensagem</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua mensagem aqui..."></textarea>
                </div>
                <button type="submit" class="w-100 btn btnpurple">Enviar</button>
                </form>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'Index',

    data(){
        return{
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

</style>
