<template>
    <button :class="estiloDobotao"  @click="disparaAcao()" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
    name:"ButtonComp",
    props:['tipo', 'rotulo','corDoBotao','confirmacao'],
    methods:{
        disparaAcao(){
            if(this.confirmacao){
                if(confirm('Confirmar esta ação?')){
                    this.$emit('botaoAtivado')
                }
            
            }else{
                 if(confirm('Confirmar esta ação?')){                    
                    this.$emit('botaoAtivado')
                }
                
                
            }
            
        }
       

    },
    computed:{
         estiloDobotao(){
           if(this.corDoBotao== 'padrao' || !this.corDoBotao ) return 'corBotao' 
           if(this.corDoBotao== 'perigo') return 'botao'
               
        return this.estiloDobotao 
        }
    }
}
</script>

<style scoped>  

.botao {
    margin: auto;
     width: 100px;
     height: 60px;
    background-color: brown;
    color: white;
    font-weight: bold;
}



.corBotao{
     margin: auto;
     width: 100px;
     height: 60px;
    background-color: rgb(39, 127, 45);
    color: white;
    font-weight: bold;
}


</style>