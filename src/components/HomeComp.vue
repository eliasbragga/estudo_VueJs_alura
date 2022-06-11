<template>
  <div id="container">
    <h1 class="centralizado">HOME</h1>

    <p v-show="mensagem" class="centralizado"> {{ mensagem }} </p>

    <input
      type="text"
      v-model="filtro"
      placeholder="pesquise uma imagem pelo título"
    />
    <p>{{ filtro }}</p>

    <ul id="lista-fotos">
      <li v-for="(foto, i) in fotosComFiltro" :key="i" id="display">
        <div id="corpo">
          <h2 id="titulo" >{{ foto.titulo }}</h2>

          <div id="fotos" >
            <img id="image" :src="foto.url" v-meu-transform='{animate:true, incremento:10}'/>            
          </div>
          <meu-botao tipo='button' rotulo='REMOVER' @botaoAtivado="remover(foto)" :confirmacao='false' corDoBotao='padrao'/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonComp from './ButtonComp.vue'
export default {
  name: "HomeComp",
  data(){
      return{
          fotos:null,
          filtro:null,
          mensagem:''
      }
  },
  methods: {
    // async getImage() {
    //   const req = await fetch("http://localhost:3000/v1/fotos");
    //   const data = await req.json();

    //   this.fotos = data;
    // },

    remover(foto){      
        this.$http
          .delete(`v1/fotos/${foto._id}`)
          .then(()=> {            
            let indice = this.fotos.indexOf(foto)
            this.fotos.splice(indice, 1)
            this.mensagem = 'Foto removida com sucesso.'
          }, err =>{            
            console.log(err)
            this.mensagem = 'Não foi possível remover a foto.'
          } )
    },

    teste() {
      alert("Ola Mundo");
    },
  },
  components:{
    'meu-botao':ButtonComp
  },
  mounted() {
    // this.getImage();
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },
  created() {
    let promise = this.$http.get('v1/fotos')
   promise
    .then(res => res.json())
    .then(fotos => this.fotos = fotos)

  }
};
</script>

<style scoped>
#container {
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 700px;
}

#display {
  margin: 5px;
  border: 2px solid black;
}

#lista-fotos {
  display: flex;
  width: 96%;
  list-style: none;
}

#fotos {
  display: flex;
  width: 200px;
  height: 180px;
}

#titulo {
  width: 100%;
  border-bottom: 1px solid black;
}

#image {
  width: 100%;
}

.centralizado{
  text-align: center;
}
</style>