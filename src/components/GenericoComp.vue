
<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <h2 v-if="this.id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" :value="foto.titulo" autocomplete="off" @input="foto.titulo = $event.target.value">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url"  autocomplete="off" v-model.lazy="foto.url">
        <div id="fotos" >
            <img id="image" :src="foto.url" />            
          </div>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" :value="foto.descricao" autocomplete="off" @input="foto.descricao = $event.target.value"></textarea>
      </div>

      <div class="centralizado">
        <ButtonComp rotulo="GRAVAR" tipo="submit"/>
        <router-link :to="{ name: 'home' }"><ButtonComp rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>


import ButtonComp from './ButtonComp.vue';
import Foto from '../domain/foto/Foto'
import EditImage from '../domain/foto/EditImage'

export default {

    data(){
        return{
            foto: new Foto(),
            id: this.$route.params.id
        }
    },

  components: {

   
    ButtonComp
  },
  methods: {
    grava() {      
       this.service
        .cadastra(this.foto)
        .then(() => {
          if(this.id) this.$router.push({ name: 'home' })
          this.foto = new Foto()},
          err => console.log(err));
    }
  },
  created() {
        this.service = new EditImage(this.$resource)

        if(this.id) {
          this.service
          .busca(this.id)
          .then(foto => this.foto = foto)
        }
  }
}

  


</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>